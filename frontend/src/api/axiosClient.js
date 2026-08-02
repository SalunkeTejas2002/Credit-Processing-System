import axios from 'axios';
import { API_BASE_URL } from '../config/apiConfig';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    // Add any request-level logic here, such as auth headers in the future.
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API response error:', {
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error('API no response received:', error.request);
    } else {
      console.error('API request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
