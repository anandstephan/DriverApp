import { useState } from 'react';
import { loginUser } from './loginService'; 
import { LoginPayload } from './types';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    payload: LoginPayload,
    onSuccess: (result:any) => void
  ) => {
    try {
      setLoading(true);
      const response = await loginUser(payload);
      onSuccess(response); // pass token to caller
    } catch (error) {
      console.error('Login error:', error);
      // Add toast or error handling here
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};
