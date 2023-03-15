import Chart from '@/components/Chart';
import ChartRegionSelect from '@/components/ChartRegionSelect';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end, regions } = useChart();

  return (
    <div className="outer">
      <Chart data={charts} start={start} end={end} />
      <ChartRegionSelect regions={regions} />
    </div>
  );
};

export default Home;
