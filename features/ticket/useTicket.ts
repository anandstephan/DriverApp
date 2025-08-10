import { useState, useEffect, useCallback } from 'react';
import { getDriverTicket } from './ticketService';
import { DriverTicket } from './type';

export const useTicket = (ticketId: string) => {
  const [ticket, setTicket] = useState<DriverTicket | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTicket = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getDriverTicket(ticketId);
      setTicket(data.ticket);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch ticket');
    } finally {
      setLoading(false);
    }
  }, [ticketId]);

  useEffect(() => {
    fetchTicket();
  }, [fetchTicket]);

  return { ticket, loading, error, refetch: fetchTicket };
};
