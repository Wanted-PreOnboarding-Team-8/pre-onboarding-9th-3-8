import { useState } from 'react';
import { useChartDatasets } from '@/lib/hooks/useChartDatasets';
import ChartHeader from '@/components/ChartHeader';
import ChartFilters from '@/components/ChartFilters';
import BarAreaChart from '@/components/barAreaChart/Chart';
import { getRegionList } from '@/lib/utils/handleData';

const Home = () => {
  const { chartDatasets, startDate, endDate } = useChartDatasets();
  const [filtered, setFiltered] = useState<string | null>(null);

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
          setFiltered={setFiltered}
        />
      </div>
      <BarAreaChart
        data={chartDatasets.value}
        filtered={filtered}
        setFiltered={setFiltered}
      />
    </div>
  );
};

export default Home;
