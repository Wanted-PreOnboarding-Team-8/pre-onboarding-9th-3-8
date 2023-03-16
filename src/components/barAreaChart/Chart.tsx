import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Bar,
  Cell,
  Line,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from '@/components/barAreaChart/CustomTooltips';
import { ColorTheme } from '@/constants/theme';
import { IChartProps } from '@/interface/props';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';

const BarAreaChart = ({ data, filtered, setFiltered }: IChartProps) => {
  if (filtered) {
    data = data.map((e) => {
      return {
        ...e,
        value_highlight: e.id === filtered ? e.value_area : null,
      };
    });
  }

  const onClickChart = (e: CategoricalChartState) => {
    const selected = e?.activePayload?.[0].payload?.id;
    setFiltered(!filtered ? selected : filtered !== selected ? selected : null);
  };

  return (
    <>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
            onClick={onClickChart}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dateTime" />
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
            <Bar
              yAxisId="left"
              dataKey="value_bar"
              fill={ColorTheme.BAR_CHART}
              barSize={20}
            >
              {data.map((e) => (
                <Cell
                  key={e.dateTime}
                  fill={
                    filtered === e.id
                      ? ColorTheme.BAR_HIGHLIGHT
                      : ColorTheme.BAR_CHART
                  }
                />
              ))}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke={ColorTheme.AREA_CHART}
              fill={ColorTheme.AREA_CHART}
              opacity={0.7}
              animationDuration={500}
            />
            {filtered && (
              <Line
                yAxisId="right"
                dataKey="value_highlight"
                stroke={ColorTheme.AREA_HIGHLIGHT}
                strokeWidth={3}
                dot={{ stroke: ColorTheme.AREA_HIGHLIGHT, strokeWidth: 5 }}
                connectNulls={true}
                animationDuration={500}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarAreaChart;
