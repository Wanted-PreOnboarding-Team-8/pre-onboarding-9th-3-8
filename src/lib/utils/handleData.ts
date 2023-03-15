import { IFetchData, IChartDataset, IChartValue } from '@/interface/chartData';

export const transformData = (fetched: IFetchData): IChartDataset => {
  const copy: IChartDataset = {
    type: fetched.type,
    version: fetched.version,
    value: [],
  };

  const res = fetched.response;

  for (const key in res) {
    copy.value.push({
      dateTime: key,
      id: res[key].id,
      value_area: res[key].value_area,
      value_bar: res[key].value_bar,
    });
  }

  return copy;
};

const calcMaxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const calcMinDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const deriveStartAndEndDate = (data: IChartValue[]) => {
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
