import axiosClient from '../api/axiosClient';

export const fetchHealthStatus = async () => {
  const response = await axiosClient.get('/health');
  return response.data;
};
