import Chart from '@/components/chart/Chart';
import Filter from '@/components/filter/Filter';
import useChart from '@/lib/hooks/useChart';

const Home = () => {
  const { charts, start, end, filterParams, setFilterParams } = useChart();

  return (
    <div className="outer">
      <Chart
        data={charts}
        start={start}
        end={end}
        filterParams={filterParams}
        setFilterParams={setFilterParams}
      />
      <Filter data={charts} setFilterParams={setFilterParams} />
    </div>
  );
};

export default Home;
