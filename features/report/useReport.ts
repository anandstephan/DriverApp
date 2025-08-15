import { useState, useEffect } from 'react';
import { report } from './reportService';

export const useReport = (day: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        setLoading(true);
        const result = await report(day);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    if (day) {
      fetchReport();
    }
  }, [day]);

  return { data, loading, error };
};
