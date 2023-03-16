import { IChartValue } from './chartData';

export interface IChartProps {
  data: IChartValue[];
  filtered: string | null;
  setFiltered: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IChartHeaderProps {
  type: string;
  version: number;
  period: {
    start: string;
    end: string;
  };
}

export interface IFilterProps {
  regions: string[];
  filtered: string | null;
  setFiltered: React.Dispatch<React.SetStateAction<string | null>>;
}
