import apiClient from '../../api/apiClient';

export const logoutUser = async (): Promise<String> => {
  try {
    const res = await apiClient.get('/api/auth/driver/logout');
    console.log("res",res)
    return res.data
  } catch (error) {
    console.error('Logout failed:', error);
    return "Logout Failed"+error
  }
};
