import { IChart } from '@/interface/chartData';

export const transformData = (res: IChart[]) => {
  for (const key in res) {
    res[key].date = key;
  }
  return Object.values(res);
};

export const getfilteredData = (charts: IChart[], ids: string[]): string[] => {
  const filteredData: string[] = [];
  charts.forEach((v) => {
    if (ids.includes(v.id)) {
      filteredData.push(v.date);
    } else {
      return;
    }
  });
  return filteredData;
};
