import apiClient from '../../api/apiClient.ts';
import { BatteryControlMsg } from './type.ts';



export const batteryService = async (payload:BatteryControlMsg)  => {
  console.log("pay",payload)
  const response = await apiClient.post('/api/driver/home/battery-control',payload);
  return response.data;
};

