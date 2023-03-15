import { useEffect, useState } from 'react';
import { getData } from '@/api/chartData';
import { API_URL } from '@/constants/url';
import { IChart } from '@/interface/chartData';
import { generateStartAndEndDate } from '@/lib/utils/generateDate';
import { transformData, transformRegion } from '../utils/transformData';

const useChart = () => {
  const [charts, setCharts] = useState<IChart[]>([]);
  const { start, end } = generateStartAndEndDate(charts);
  const regions = transformRegion(charts);

  useEffect(() => {
    const getCharts = async () => {
      try {
        const response = await getData(API_URL);
        const transformedData = transformData(response.data.response);
        setCharts(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    getCharts();
  }, []);

  return { charts, start, end, regions };
};

export default useChart;
