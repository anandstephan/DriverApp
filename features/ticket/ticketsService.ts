import apiClient from '../../api/apiClient';

export const getDriverTickets = async () => {
  try {
    const res = await apiClient.get('/api/driver/tickets/getDriverTickets');
    return res.data; // return ticket list
  } catch (error) {
    console.error('Error fetching driver tickets:', error);
    throw error;
  }
};
