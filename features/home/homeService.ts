import apiClient from '../../api/apiClient.ts';
import { BatteryData } from './types.ts';


export const home = async (): Promise<BatteryData> => {
  try {
  const response = await apiClient.get('/api/driver/home');
  console.log("res",response)
  return response.data;    
  } catch (error) {
    console.log("Error",error)
  }

};

