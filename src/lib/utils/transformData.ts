import { IChart } from '@/interface/chartData';

export const transformData = (res: IChart[]) => {
  for (const key in res) {
    res[key].date = key;
  }
  return Object.values(res);
};

export const transformRegion = (charts: IChart[]): string[] => {
  return Array.from(new Set(charts.map((chart) => chart.id)));
};
