import apiClient from '../../api/apiClient';

export const logoutUser = async (): Promise<String> => {
  try {
    console.log("Test")
    const res = await apiClient.get('/api/driver/driver/logout');
    console.log("res",res)
    return res.data
  } catch (error) {
    console.error('Logout failed:', error);
    return "Logout Failed"+error
  }
};
