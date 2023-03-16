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
    startDate: string;
    endDate: string;
  };
}

export interface IFilterProps {
  regions: string[];
  filtered: string | null;
  setFiltered: (rigion: string | null) => void;
}
