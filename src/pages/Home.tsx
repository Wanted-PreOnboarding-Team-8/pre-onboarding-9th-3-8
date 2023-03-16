import { useChartDatasets } from '@/lib/hooks/useChartDatasets';
import { useFilter } from '@/lib/hooks/useFilter';
import ChartHeader from '@/components/ChartHeader';
import ChartFilters from '@/components/ChartFilters';
import BarAreaChart from '@/components/barAreaChart/Chart';
import { getRegionList } from '@/lib/utils/handleData';

const Home = () => {
  const { chartDatasets, startDate, endDate } = useChartDatasets();
  const { filtered, setFilter } = useFilter();

  return (
    <div>
      <div className="home_header">
        <ChartHeader
          type={chartDatasets.type}
          version={chartDatasets.version}
          period={{ start: startDate, end: endDate }}
        />
        <ChartFilters
          regions={getRegionList(chartDatasets.value)}
          filtered={filtered}
          setFiltered={setFilter}
        />
      </div>
      <BarAreaChart
        data={chartDatasets.value}
        filtered={filtered}
        setFiltered={setFilter}
      />
    </div>
  );
};

export default Home;
