import { ChartData } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { IData } from '@/interface/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
);

const ChartCanvas = ({
  filteredData,
  options,
  plugins,
}: {
  filteredData: any;
  options: any;
  plugins: any;
}) => {
  const hatchPlugins = plugins.map((ele: any) => ele('red'));

  const chartData: ChartData<any, { key: string; value: number | null }[]> = {
    datasets: filteredData,
  };

  return (
    <div style={{ border: 'solid 5px teal', padding: '10px' }}>
      <Bar
        options={options}
        data={chartData}
        //plugins={[plugins.backgroundColor('black'), plugins.annotationline('red')]}
        plugins={hatchPlugins}
      />
    </div>
  );
};

export default ChartCanvas;
