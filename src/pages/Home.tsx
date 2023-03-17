import Chart from '@/components/chart/Chart';
import Filter from '@/components/filter/Filter';
import useChart from '@/lib/hooks/useChart';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const { charts, start, end } = useChart();
  const [filterParams, setFilterParams] = useSearchParams();

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
