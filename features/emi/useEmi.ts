import { useEffect, useState } from "react";
import { emiService } from "./emiService";

export const useEMI = (mobile: string) => {
  const [data, setData] = useState<[Object] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEmi = async (mobile: string) => {

    try {
      setLoading(true);
      setError(null);

      const res = await emiService(mobile);
      setData(res.data);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (mobile) {
      fetchEmi(mobile);
    }
  }, [mobile]);

  return {
    data,
    loading,
    error,
    refetch: fetchEmi,
  };
};
