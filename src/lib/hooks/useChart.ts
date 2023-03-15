import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getData } from '@/api/chartData';
import { API_URL } from '@/constants/url';
import { IChart } from '@/interface/chartData';
import { generateStartAndEndDate } from '@/lib/utils/generateDate';
import transformData from '@/lib/utils/transformData';

const useChart = () => {
  const [charts, setCharts] = useState<IChart[]>([]);
  const [filterParams, setFilterParams] = useSearchParams();

  const { start, end } = generateStartAndEndDate(charts);

  useEffect(() => {
    const getCharts = () => {
      getData(API_URL)
        .then((res) => transformData(res.data.response))
        .then(setCharts)
        .catch(console.error);
    };

    getCharts();
  }, []);

  return { charts, start, end, filterParams, setFilterParams };
};

export default useChart;
