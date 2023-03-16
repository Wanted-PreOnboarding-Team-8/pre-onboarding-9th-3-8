import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
}

export interface IChartRegionSelectProps {
  regions: string[];
}

export interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: IChart | undefined;
  region?: string | null;
}
