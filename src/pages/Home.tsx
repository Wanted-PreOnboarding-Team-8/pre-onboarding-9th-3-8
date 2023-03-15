import Chart from '@/components/Chart';
import ChartFilter from '@/components/ChartFilter';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end } = useChart();
  const localList = Array.from(new Set(charts.map((value) => value.id)));

  return (
    <div className="outer">
      <ChartFilter filterList={localList} />
      <Chart data={charts} start={start} end={end} />
    </div>
  );
};

export default Home;
