import apiClient from '../../api/apiClient.ts';
import { BatteryData } from './types.ts';


export const home = async (): Promise<BatteryData> => {
  const response = await apiClient.get('/api/driver/home');
  return response.data;
};

