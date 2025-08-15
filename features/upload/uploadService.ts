import apiClient from '../../api/apiClient.ts';
import { S3UploadResponse } from './type.ts';

export const uploadFileToS3 = async (
  file: File,
  category: string,
  appName: string
): Promise<S3UploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('category', category);
  formData.append('appName', appName);

  const response = await apiClient.post('/api/others/api/s3/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};