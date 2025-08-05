import { useState } from 'react';
import { signupUser } from './signupService.ts';
import { SignupPayload } from './types.ts';

export const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (payload: SignupPayload, onSuccess: () => void) => {
    try {
      setLoading(true);
      const userData= await signupUser(payload);
      console.log("userData",userData)
      onSuccess();
    } catch (error) {
      console.error('Signup error:', error);
      // You can add Toast here
    } finally {
      setLoading(false);
    }
  };

  return { handleSignup, loading };
};
