import apiClient from '../../api/apiClient';
import { TicketPayload, TicketResponse } from './type';



export const createTicket = async (payload:TicketPayload): Promise<TicketResponse> => {
  console.log(payload)
  const response = await apiClient.post('/api/driver/tickets/create',payload);
  console.log("+++++",response)
  return response.data;
};

