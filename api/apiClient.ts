import axios from 'axios';
import { getItem } from '../utilities/storage';
  
    // baseURL:"http://localhost:5000",
        // baseURL:"http://192.168.29.130:5000",
const apiClient = axios.create({
baseURL: 'https://backendverse.digivoltt.com',
  timeout: 5000,
  headers:{
    'Content-Type':"application/json"
  },
  withCredentials: true 
});

apiClient.interceptors.request.use(
  (config) => {
    // Check if request is NOT login
    if (config.url !== "/api/driver/auth/login") {//
    
      const token = getItem("token"); // get from MMKV / AsyncStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
