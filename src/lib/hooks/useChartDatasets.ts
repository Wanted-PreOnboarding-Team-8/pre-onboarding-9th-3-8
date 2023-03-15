import { useEffect, useState } from 'react';
import { getData } from '@/api/chartData';
import { API_URL } from '@/constants/url';
import { transformData, deriveStartAndEndDate } from '@/lib/utils/handleData';
import { IChartDataset } from '@/interface/chartData';

export const useChartDatasets = () => {
  const [chartDatasets, setChartDatasets] = useState<IChartDataset[]>([]);
  const { startDate, endDate } = deriveStartAndEndDate(chartDatasets);

  useEffect(() => {
    const getCharts = () => {
      getData(API_URL)
        .then((res) => transformData(res.data.response))
        .then(setChartDatasets)
        .catch(console.error);
    };

    getCharts();
  }, []);

  return { chartDatasets, startDate, endDate };
};
