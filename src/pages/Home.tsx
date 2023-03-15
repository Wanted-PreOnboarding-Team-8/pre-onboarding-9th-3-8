import Chart from '@/components/Chart';
import ChartRegionSelect from '@/components/ChartRegionSelect';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end, region } = useChart();

  return (
    <div className="outer">
      <Chart data={charts} start={start} end={end} />
      <ChartRegionSelect region={region} />
    </div>
  );
};

export default Home;
