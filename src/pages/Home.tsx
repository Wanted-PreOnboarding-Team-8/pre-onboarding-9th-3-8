import { useChartDatasets } from '@/lib/hooks/useChartDatasets';
import BarAreaChart from '@/components/BarAreaChart';

const Home = () => {
  const { chartDatasets, startDate, endDate } = useChartDatasets();

  return (
    <div className="outer">
      <BarAreaChart
        data={chartDatasets.value}
        start={startDate}
        end={endDate}
      />
    </div>
  );
};

export default Home;
