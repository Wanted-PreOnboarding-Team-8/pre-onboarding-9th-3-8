import chartApi from '@/api/chart';
import transformData from '@/lib/utils/transformData';
import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Area,
  ComposedChart,
} from 'recharts';

export interface Chartdata {
  id: string;
  value_area: number;
  value_bar: number;
}

const Chart = () => {
  const [chartDatas, setChartDatas] = useState<Chartdata[]>([]);

  const getMockData = () => {
    chartApi()
      .then((response) => {
        const transformDatas = transformData(response);
        setChartDatas(transformDatas);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMockData();
  }, []);

  return (
    <ComposedChart
      width={1200}
      height={400}
      data={chartDatas}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="time" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="right" dataKey="value_bar" fill="#413ea0" />
      <Area
        yAxisId="left"
        dataKey="value_area"
        fill="#8884d8"
        stroke="#8884d8"
      />
    </ComposedChart>
  );
};

export default Chart;
