import { IChartValue } from './chartData';

export interface IChartProps {
  data: IChartValue[];
  start: string;
  end: string;
}

export interface IChartHeaderProps {
  type: string;
  version: number;
}
