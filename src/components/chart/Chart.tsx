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
import CustomTooltip from '@/components/chart/CustomTooltips';
import { IChartProps } from '@/interface/props';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';

const Chart = ({
  data,
  start,
  end,
  filterParams,
  setFilterParams,
}: IChartProps) => {
  const paramsId = filterParams.get('id');
  const chartClickHandler = (e: CategoricalChartState) => {
    if (e && e.activeTooltipIndex)
      setFilterParams({ id: data[e.activeTooltipIndex].id });
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
            onClick={(e) => chartClickHandler(e)}
          >
            <defs>
              <linearGradient id="gradient">
                {data.map((element, index) => (
                  <stop
                    key={`${element.id}${index}`}
                    offset={`${100 - ((100 - index - 1) / (100 - 1)) * 100}%`}
                    stopColor={
                      element.id === paramsId || paramsId === 'all'
                        ? '#60C42B'
                        : '#ECFCD4'
                    }
                  />
                ))}
              </linearGradient>
            </defs>
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
              {data.map((element, index) => (
                <Cell
                  key={`${element.id}${index}`}
                  fill={
                    element.id === paramsId || paramsId === 'all'
                      ? '#84A9FF'
                      : '#D6E4FF'
                  }
                  onClick={() => setFilterParams({ id: element.id })}
                />
              ))}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke="#FFE7D7"
              fill="url(#gradient)"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
