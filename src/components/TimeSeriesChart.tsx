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
  ChartTypeRegistry,
  Point,
  BubbleDataPoint,
  Filler,
  ChartOptions,
} from 'chart.js';
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

const BarAreaChart = () => {
  const [data, setData] =
    useState<
      ChartData<
        keyof ChartTypeRegistry,
        (number | [number, number] | Point | BubbleDataPoint | null)[],
        unknown
      >
    >();
  const options: ChartOptions = {
    scales: {
      bar: {
        type: 'linear',
        position: 'left',
      },
      area: {
        type: 'linear',
        position: 'right',
      },
    },
    animation: {
      duration: 0,
    },
  };

  useEffect(() => {
    getData()
      .then((res) => {
        const chartData = res.data.response;
        const labels = Object.keys(chartData);

        const areaValues = labels.map((label) => chartData[label].value_area);
        const barValues = labels.map((label) => chartData[label].value_bar);

        setData({
          labels,
          datasets: [
            {
              type: 'line' as const,
              label: 'Area',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 2,
              fill: true,
              data: areaValues,
              yAxisID: 'area',
              backgroundColor: 'rgba(53, 162, 235, 0.3)',
            },
            {
              type: 'bar' as const,
              label: 'Bar',
              backgroundColor: 'rgb(75, 192, 192)',
              data: barValues,
              borderColor: 'white',
              borderWidth: 2,
              yAxisID: 'bar',
            },
          ],
        });
      })
      .catch((e) => console.error(e));
  });

  return <>{data && <Chart type="bar" data={data} options={options} />}</>;
};

export default BarAreaChart;
