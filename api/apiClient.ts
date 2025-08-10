import axios from 'axios';
import { storage } from '../utilities/storage';

const apiClient = axios.create({
  baseURL: 'https://backendverse.digivoltt.com',
  timeout: 5000,
  headers:{
    'Content-Type':"application/json"
  },
  withCredentials: true 
});

// apiClient.interceptors.request.use(async (config) => {
//   const token = await storage.get('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });


export default apiClient;
