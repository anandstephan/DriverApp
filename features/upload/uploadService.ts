import apiClient from '../../api/apiClient.ts';
import { RNFile, S3UploadResponse } from './type.ts';

export const uploadFileToS3 = async (
  file: RNFile,
  category: string,
  appName: string
): Promise<S3UploadResponse> => {
  const formData = new FormData();
  formData.append('selfie', {
    uri: file.uri,
    name: file.fileName,
    type: file.type,
  } as any);
  formData.append('category', category);
  formData.append('appName', appName);

  const response = await apiClient.post('/api/driver/profile/uploadSelfie', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log("Pic",response.data)
  return response.data;
};