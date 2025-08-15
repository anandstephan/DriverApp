import apiClient from '../../api/apiClient.ts';
import { BatteryControlMsg } from './type.ts';



export const batteryService = async (payload:BatteryControlMsg)  => {
  const response = await apiClient.post('/api/driver/home/battery-control',payload);
  console.log("+++++",response)
  return response.data;
};

