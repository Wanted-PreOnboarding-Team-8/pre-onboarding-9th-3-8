import { IChartValue } from './chartData';

export interface IChartProps {
  data: IChartValue[];
  start: string;
  end: string;
  filtered: string | null;
  setFiltered: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IChartHeaderProps {
  type: string;
  version: number;
}

export interface IFilterProps {
  regions: string[];
  filtered: string | null;
  setFiltered: React.Dispatch<React.SetStateAction<string | null>>;
}
