import { useState } from 'react';
import { createTicket } from './createTicket'; 
import { TicketPayload } from './type';

export const useCreateTicket = () => {
  const [loading, setLoading] = useState(false);

  const handleCreateTicket = async (
    payload: TicketPayload,
    onSuccess: (result:Object) => void
  ) => {
    try {
      setLoading(true);
      const response = await createTicket(payload);
      onSuccess(response); // pass token to caller
    } catch (error) {
      console.error('Create Ticket Error:', error);
      // Add toast or error handling here
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateTicket, loading };
};
