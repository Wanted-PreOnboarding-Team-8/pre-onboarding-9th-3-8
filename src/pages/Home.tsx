import { useChartDatasets } from '@/lib/hooks/useChartDatasets';
import BarAreaChart from '@/components/BarAreaChart';
import ChartHeader from '@/components/ChartHeader';

const Home = () => {
  const { chartDatasets, startDate, endDate } = useChartDatasets();

  return (
    <div className="outer">
      <ChartHeader type={chartDatasets.type} version={chartDatasets.version} />
      <BarAreaChart
        data={chartDatasets.value}
        start={startDate}
        end={endDate}
      />
    </div>
  );
};

export default Home;
