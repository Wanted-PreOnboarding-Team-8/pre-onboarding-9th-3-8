import { axiosInstance } from '@/api/client';

const chart = {
  getChartsAPI: async () => {
    const { data } = await axiosInstance.get('/mock/mockdata.json');
    return data;
  },
};

export default chart;
