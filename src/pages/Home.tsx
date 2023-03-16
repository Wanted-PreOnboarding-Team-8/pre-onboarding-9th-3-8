import Chart from '@/components/Chart';
import ChartFilter from '@/components/ChartFilter';
import useChart from '@/lib/hooks/useChart';
import { getfilteredData } from '@/lib/utils/chartHelper';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const { charts, start, end } = useChart();
  const idList = Array.from(new Set(charts.map((value) => value.id)));
  const [searchParams] = useSearchParams();
  const idfilterList = searchParams.getAll('id');
  const filteredData = getfilteredData(charts, idfilterList);

  return (
    <div className="outer">
      <h1>{`${start} ~ ${end}`}</h1>
      <ChartFilter filterList={idList} />
      <Chart data={charts} filteredData={filteredData} />
    </div>
  );
};

export default Home;
