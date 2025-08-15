import { DriverTicket } from "./type";
import apiClient from '../../api/apiClient';



export const getDriverTicket = async (ticketId: string): Promise<DriverTicket> => {
  const res = await apiClient.get(`/api/driver/tickets/getTicket/{ticketId}/${ticketId}`);
  return res.data;
};
