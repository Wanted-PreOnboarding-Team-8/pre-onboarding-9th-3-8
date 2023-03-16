import { useEffect, useState } from 'react';
import { getData } from '@/api/chartData';
import { API_URL } from '@/constants/url';
import { transformData, deriveStartAndEndDate } from '@/lib/utils/handleData';
import { IChartDataset } from '@/interface/chartData';

const initValue = {
  type: '',
  version: 0,
  value: [],
};

export const useChartDatasets = () => {
  const [chartDatasets, setChartDatasets] = useState<IChartDataset>(initValue);
  const { startDate, endDate } = deriveStartAndEndDate(chartDatasets.value);

  useEffect(() => {
    const getCharts = () => {
      getData(API_URL)
        .then((res) => transformData(res.data))
        .then(setChartDatasets)
        .catch(console.error);
    };

    getCharts();
  }, []);

  return { chartDatasets, period: { startDate, endDate } };
};
