import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltips';
import { IChart } from '@/interface/chartData';
import { useSearchParams } from 'react-router-dom';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import { getfilteredData } from '@/lib/utils/chartHelper';

type Props = {
  data: IChart[];
};

const Chart = ({ data }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const idfilterList = searchParams.getAll('id');
  const filteredData = getfilteredData(data, idfilterList);

  const onClickData = (e: CategoricalChartState) => {
    if (e === null) return;
    if (e.activePayload === undefined) return;
    const value: IChart = e.activePayload[0].payload;
    setSearchParams({ id: value.id });
  };

  return (
    <div className="inner">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data as IChart[]}
          margin={{
            top: 40,
            right: 30,
            left: 20,
          }}
          onClick={onClickData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            yAxisId="left"
            label={{ value: 'value_bar', position: 'top', offset: 20 }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 150]}
            label={{ value: 'value_area', position: 'top', offset: 20 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="value_bar" fill="#868e96" barSize={20} />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="value_area"
            stroke="#ff8787"
            fill="#ffa8a8"
          />
          {filteredData.map((date) => (
            <ReferenceArea
              key={date}
              yAxisId="left"
              x1={date}
              x2={date}
              fill="#ffff00"
              fillOpacity={0.3}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
