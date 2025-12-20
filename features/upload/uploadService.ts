import axios from 'axios';
import apiClient from '../../api/apiClient.ts';
import { RNFile, S3UploadResponse } from './type.ts';

export const uploadFileToS3 = async (
  file: RNFile,
  category: string,
  appName: string
): Promise<S3UploadResponse> => {
  const formData = new FormData();
  formData.append('file', {
    uri: file.uri,
    name: file.name,
    type: file.type,
  } as any);
  formData.append('category', category);
  formData.append('appName', appName);

  console.log("newres",formData)
      // const url = 'http://localhost:5000/api/others/api/s3/upload'

 const url ="https://backendverse.digivoltt.com/api/others/api/s3/upload"
    const response = await axios.post(
      url,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  console.log("Pic2",response.data)
  return response.data;
};