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
import { useState } from 'react';
import CustomTooltip from '@/components/CustomTooltips';
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart';
import { IChartProps } from '@/interface/props';

const BarAreaChart = ({ data, start, end }: IChartProps) => {
  const [clickedRegion, setClickedRegion] = useState<string | null>(null);

  if (clickedRegion) {
    data = data.map((e) => {
      return {
        ...e,
        value_highlight: e.id === clickedRegion ? e.value_area : null,
      };
    });
  }

  const onClickChart = (clicked: CategoricalChartState) => {
    if (clicked?.activeLabel) {
      const clickedData = data.find((e) => e.dateTime === clicked.activeLabel);
      setClickedRegion(!clickedData ? null : clickedData.id);
    }
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
            <Bar yAxisId="left" dataKey="value_bar" fill="#868e96" barSize={20}>
              {data.map((e) => (
                <Cell
                  style={{ zIndex: 1 }}
                  key={e.dateTime}
                  fill={clickedRegion === e.id ? 'red' : '#868e96'}
                  order={99}
                />
              ))}
            </Bar>
            <Area
              style={{ zIndex: 2 }}
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke="#ff8787"
              fill="#ffa8a8"
              animationDuration={500}
            />
            {clickedRegion && (
              <Line
                yAxisId="right"
                dataKey="value_highlight"
                stroke="blue"
                strokeWidth={3}
                dot={{ stroke: 'blue', strokeWidth: 5 }}
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

//  TODO
//  private 분리, 옵션 먹인것 props로 전달받기
//const StyledBarChart = (styleProp) => {}
//const StyledAreaChart = (styleProp) => {}
//const StyledHighlight = (styleProp) => {}
