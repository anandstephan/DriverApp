export interface TicketPayload {
  description: string;
  ticketType: string;
  media: string[]; // array of media URLs
}

export type TicketResponse = {
  ticketId: string;
  status: string;
  createdAt: string; // ISO date string
};
