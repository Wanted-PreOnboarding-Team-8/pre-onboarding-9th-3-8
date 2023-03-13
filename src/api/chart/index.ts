import { axiosInstance } from '@/api/apiClient';

const chartApi = async () => {
  const response = await axiosInstance.get('/mock/mockdata.json');
  return response.data.response;
};

export default chartApi;
