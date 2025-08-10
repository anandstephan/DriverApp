import apiClient from '../../api/apiClient.ts';
import { DriverProfile } from './type.ts';

export const getDriverProfile = async (): Promise<DriverProfile> => {
  const response = await apiClient.get<DriverProfile>('/api/profile/driver/profile');
  return response.data;
};
