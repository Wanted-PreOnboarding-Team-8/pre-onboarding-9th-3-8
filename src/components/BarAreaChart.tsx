import { getData } from '@/api/data';
import { useEffect, useState } from 'react';
import { IChartData } from '../interface/chart.d';

const BarAreaChart = () => {
  const [chartData, setChartData] = useState<IChartData>();

  useEffect(() => {
    getData()
      .then((res) => {
        setChartData(res.data.response);
      })
      .catch((e) => console.error(e));
  });

  return <div></div>;
};

export default BarAreaChart;
