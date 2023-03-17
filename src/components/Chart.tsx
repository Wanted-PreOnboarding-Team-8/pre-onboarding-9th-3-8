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
  Cell,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltips';
import { IChartProps } from '@/interface/props';
import { useSearchParams } from 'react-router-dom';
import CustomDot from './CustomDot';

const Chart = ({ data, start, end }: IChartProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');

  const handleSearchParams = (ids: string) => {
    setSearchParams({ region: ids });
  };

  return (
    <>
      <h1>{`${start} ~ ${end}`}</h1>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
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
            <Bar yAxisId="left" dataKey="value_bar" barSize={20}>
              {data.map((v) => (
                <Cell
                  cursor="pointer"
                  fill={region?.split(',').includes(v.id) ? '#82ca9d' : '#999'}
                  key={v.date}
                  onClick={() => handleSearchParams(v.id)}
                />
              ))}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke="#ff8787"
              fill="#ffa8a8"
              dot={<CustomDot region={region} />}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
