import apiClient from '../../api/apiClient.ts';
import { TicketPayload, TicketResponse } from './type.ts';



export const createTicket = async (payload:TicketPayload): Promise<TicketResponse> => {
  console.log(payload)
  const response = await apiClient.post('/api/driver/tickets/create',payload);
  console.log("+++++",response)
  return response.data;
};

