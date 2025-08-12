// src/features/auth/useLogout.ts
import { useState, useCallback } from 'react';
import { logoutUser } from './logoutService';

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await logoutUser();
      setStatus(res);
      return res; // optionally return response to caller
    } catch (err: any) {
      setError(err.message || 'Logout failed');
    } finally {
      setLoading(false);
    }
  }, []);

  return { logout, loading, error, status };
};
