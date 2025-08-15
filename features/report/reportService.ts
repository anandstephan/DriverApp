import apiClient from '../../api/apiClient.ts';



export const report = async (day:string)  => {
  const response = await apiClient.get(`/api/driver/home/reports/${day}`);
  return response.data;
};

