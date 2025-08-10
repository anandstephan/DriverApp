export type DriverTicket = {
  _id: string;
  driverId: string;
  batteryId: string;
  description: string;
  ticketType: string;
  media: string;        // URL
  createdAt: string;    // ISO date string
  updatedAt: string;    // ISO date string
  ticketId: string;
  __v: number;
};
