import { useState, useEffect, useCallback } from 'react';
import { getDriverTickets } from './ticketsService';
import { DriverTicket } from './type';

export const useTickets = () => {
  const [tickets, setTickets] = useState<DriverTicket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTickets = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getDriverTickets();
      setTickets(data.tickets);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch driver tickets');
      setTickets([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return { tickets, loading, error, refetch: fetchTickets };
};
