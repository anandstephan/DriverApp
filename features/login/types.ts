export interface LoginPayload {
  driverId: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  message: string;
}
