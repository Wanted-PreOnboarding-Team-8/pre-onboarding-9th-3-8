import chartApi from '@/api/chart';
import { Chartdata } from '@/interface/Chart';
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
import CustomTooltip from './CustomTooltip';

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
        top: 30,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="time"
        label={{ value: 'time', position: 'insideBottomRight', offset: -10 }}
      />
      <YAxis
        yAxisId="left"
        label={{ value: 'value_area', position: 'top', offset: 10 }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        label={{ value: 'value_bar', position: 'top', offset: 10 }}
      />
      <Tooltip content={<CustomTooltip />} />
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
