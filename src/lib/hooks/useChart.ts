import chart from '@/api/chart';
import { useEffect, useState } from 'react';

const useChart = () => {
  const [charts, setCharts] = useState<IChart>({
    chartDate: [],
    chartValue: [],
  });
  const { chartDate, chartValue } = charts;

  useEffect(() => {
    const getCharts = () => {
      chart.getChartsAPI().then((res) =>
        setCharts({
          chartDate: Object.keys(res.response),
          chartValue: Object.values(res.response),
        }),
      );
    };

    getCharts();
  }, []);

  return { chartDate, chartValue };
};

export default useChart;
