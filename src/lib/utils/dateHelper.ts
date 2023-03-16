import { IChart } from '@/interface/chartData';

const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

export const generateStartAndEndDate = (data: IChart[]) => {
  const dateList = data.map(({ date }) => new Date(date));

  const min = minDate(dateList);
  const start = `${min.getFullYear()}년${
    min.getMonth() + 1
  }월${min.getDate()}일`;

  const max = maxDate(dateList);
  const end = `${max.getFullYear()}년${max.getMonth() + 1}월${max.getDate()}일`;

  return { start, end };
};
