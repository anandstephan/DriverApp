export interface SignupPayload {
  name: string;
  phone: string;
  interestedIn: string;
}

export interface SignupResponse {
  message: string;
  user: {
    _id: string;
    leadId: string;
    name: string;
    phone: string;
    status: 'new' | string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    convertedToDriver: string | null;
    __v: number;
  };
}
