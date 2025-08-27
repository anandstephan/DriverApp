export interface DriverDocuments {
  aadhar: string;
  license: string;
  selfie: string;
}

export interface DriverProfile {
  documents: DriverDocuments;
  _id: string;
  driverId: string;
  password: string; // ⚠️ ideally password ko API me return nahi karna chahiye
  onboardedBy: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  aadharNumber: string;
  licenseNumber: string;
  batteryId: string;
  rikshawId: string | null;
  ownsBattery: boolean;
  ownsRikshaw: boolean;
  isActive: boolean;
  onboardedAt: string; // ISO date string
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string
  __v: number;
}


export type ProfileTab = {
  name: string;
  driverId: string;
  phone: string;
  address: string;
  cluster: string;
  city: string;
  state: string;
  profilePic:string;
};
