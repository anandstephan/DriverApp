export type TravelTime = {
  durationMinutes: number;
  durationString: string;
  start: string | null;
  end: string | null;
};

export type BatteryData = {
  lat: number;
  lng: number;
  soh: number;
  soc: number;
  temp: number;
  timeTravelled: TravelTime;
};
