// useBatteryControl.ts
import { useState, useCallback } from 'react';
import { batteryService } from './batteryService';
import { BatteryControlMsg } from './type';

export const useBatteryControl = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendBatteryControl = useCallback(async (payload: BatteryControlMsg) => {
    try {
      setLoading(true);
      setError(null);
      const result = await batteryService(payload);
      setData(result);
      return result; // so caller can get response directly too
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, sendBatteryControl };
};
