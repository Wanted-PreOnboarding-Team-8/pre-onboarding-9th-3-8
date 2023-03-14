import { getData } from '@/api/data';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
  Filler,
  ChartOptions,
} from 'chart.js';
import { getChartData, getChartOptions } from '@/lib/utils/chartHelpers';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
);

const TimeSeriesChart = () => {
  const [data, setData] = useState<ChartData>();
  const [options, setOptions] = useState<ChartOptions>();

  useEffect(() => {
    const getChart = async () => {
      try {
        const chartData = (await getData()).data.response;

        const labels = Object.keys(chartData);
        const areaData = labels.map((label) => chartData[label].value_area);
        const barData = labels.map((label) => chartData[label].value_bar);

        const setTooltipOption = (label: string) => {
          const chart = chartData[label];
          return [
            chart.id,
            `value_bar : ${chart.value_bar}`,
            `value_area : ${chart.value_area}`,
          ];
        };

        setData(getChartData(labels, areaData, barData));
        setOptions(getChartOptions(setTooltipOption));
      } catch (e) {
        console.error(e);
      }
    };
    getChart();
  }, []);

  return <>{data && <Chart type="bar" data={data} options={options} />}</>;
};

export default TimeSeriesChart;
