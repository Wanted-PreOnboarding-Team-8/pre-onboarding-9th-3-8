import { IChartDataset } from '@/interface/chartData';

export const transformData = (res: IChartDataset[]) => {
  for (const key in res) {
    res[key].dateTime = key;
  }
  return Object.values(res);
};

const calcMaxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const calcMinDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const deriveStartAndEndDate = (data: IChartDataset[]) => {
  const dateList = data.map(({ dateTime }) => new Date(dateTime));

  const minDate = calcMinDate(dateList);
  const startDate = `${minDate.getFullYear()}-${
    minDate.getMonth() + 1
  }-${minDate.getDate()}`;

  const maxDate = calcMaxDate(dateList);
  const endDate = `${maxDate.getFullYear()}-${
    maxDate.getMonth() + 1
  }-${maxDate.getDate()}`;

  return { startDate, endDate };
};
