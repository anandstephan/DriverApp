import apiClient from '../../api/apiClient.ts';
import { WarantyCard } from './type.ts';


export const Waranty = async (): Promise<WarantyCard> => {
  const response = await apiClient.get('/api/driver/profile/warranty-card');
  return response.data;
};

