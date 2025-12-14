import apiClient from '../../api/apiClient.ts';
import { LoginPayload } from './types.ts';


export const loginUser = async (payload: LoginPayload): Promise<any> => {
  const response = await apiClient.post<any>('/api/auth/login', payload);
  return response.data;    
  

};

