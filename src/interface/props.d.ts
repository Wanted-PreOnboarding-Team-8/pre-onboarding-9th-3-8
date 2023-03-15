import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
  filterParams: URLSearchParams;
}
export interface IFilterProps {
  data: IChart[];
  setFilterParams: SetURLSearchParams;
}
