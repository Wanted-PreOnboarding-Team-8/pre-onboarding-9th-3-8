import Chart from '@/components/Chart';
import ChartFilter from '@/components/ChartFilter';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end } = useChart();
  const idList = Array.from(new Set(charts.map((value) => value.id)));

  return (
    <div className="outer">
      <h1>{`${start} ~ ${end}`}</h1>
      <ChartFilter filterList={idList} />
      <Chart data={charts} />
    </div>
  );
};

export default Home;
