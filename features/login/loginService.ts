import apiClient from '../../api/apiClient.ts';
import { LoginPayload, LoginResponse } from './types.ts';


export const loginUser = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/api/driver/auth/login', payload);
  return response.data;
};

