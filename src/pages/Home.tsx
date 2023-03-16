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
    <div className="outer">
      <ChartHeader type={chartDatasets.type} version={chartDatasets.version} />
      <ChartFilters
        regions={getRegionList(chartDatasets.value)}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <BarAreaChart
        data={chartDatasets.value}
        start={startDate}
        end={endDate}
        filtered={filtered}
        setFiltered={setFiltered}
      />
    </div>
  );
};

export default Home;
