// src/hooks/useS3Upload.ts
import { useState } from 'react';
import { uploadFileToS3 } from './uploadService';
import { S3UploadResponse } from './type';

export const useS3Upload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<S3UploadResponse | null>(null);

  const upload = async (
    file: { uri: string; name: string; type: string }, // React Native friendly
    category: string,
    appName: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const result = await uploadFileToS3(file, category, appName);
      setData(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error, data };
};
