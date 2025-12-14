import { useState } from 'react';
import apiClient from '../../api/apiClient.ts';
import { BatteryData } from './types.ts';


export const home = async (): Promise<any> => {
  try {
  const response = await apiClient.get('/api/driver/home/');
  console.log("res2",response)
  return response.data;    
  } catch (error) {
    console.log("Error",error)
  }

};



