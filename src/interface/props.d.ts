import { IChartValue } from './chartData';

export interface IChartProps {
  data: IChartValue[];
  filtered: string | null;
  setFiltered: (rigion: string | null) => void;
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
  setFiltered: (rigion: string | null) => void;
}
