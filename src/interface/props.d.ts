import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
}

export interface IChartRegionSelectProps {
  regions: string[];
}
