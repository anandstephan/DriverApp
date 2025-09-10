// useHome.ts
import { useEffect, useState } from "react";

import { BatteryData } from "./types";
import { home } from "./homeService";
import { Alert } from "react-native";

// Ye hook API se data laane ka kaam karega
export const useHome = () => {
  const [data, setData] = useState<BatteryData | null>(null); // API ka response store hoga
  const [loading, setLoading] = useState<boolean>(false); // Loader ke liye
  const [error, setError] = useState<string | null>(null); // Error messages ke liye

  // Ye function actual API call karega
  const fetchHomeData = async () => {
    try {
      setLoading(true); // Loader start
      setError(null);   // Purana error clear
      const res = await home(); // API call
        console.log('Myres',res)
      setData(res); // Response data store
    } catch (err: any) {
      setError(err?.message || "Kuchh galat ho gaya"); // Error set
    } finally {
      setLoading(false); // Loader stop
    }
  };

  // Component mount hone par API call
  useEffect(() => {
    fetchHomeData();
  }, []);

  // Hook se data, loading, error aur refetch function return
  return { data, loading, error, refetch: fetchHomeData };
};
