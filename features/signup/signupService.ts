

import apiClient from '../../api/apiClient.ts';
import { SignupPayload, SignupResponse } from './types.ts';

export const signupUser = async (payload: SignupPayload): Promise<SignupResponse> => {
  const response = await apiClient.post<SignupResponse>('/api/auth/driver/signup', payload);
  return response.data;
};
