import apiClient from '../../api/apiClient.ts';




export const emiService = async (payload:string)  => {
  const response = await apiClient.get(`/api/emi?mobile=${payload}`);
  return response.data;
};

