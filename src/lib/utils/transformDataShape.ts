import { IData } from '@/interface/data';

export const transObjToArr = (action: any) => {
  return Object.entries(action.payload.response).map((ele: [string, any]) => {
    return {
      tid: ele[0],
      ...ele[1],
    };
  });
};

export const mapBarDataset = (rawData: IData[], color: string) => {
  const regionIdList = rawData
    .map((ele) => ele.id)
    .reduce(
      (prev: string[], curr) => (prev.includes(curr) ? prev : [...prev, curr]),
      [],
    );

  return regionIdList.map((region) => {
    return {
      order: 1,
      type: 'bar' as const,
      yAxisID: 'value_bar',
      label: region,
      backgroundColor: color,
      hoverBackgroundColor: 'green',
      data: rawData.map((ele) =>
        ele.id === region
          ? { key: ele.tid, value: ele.value_bar }
          : { key: ele.tid, value: null },
      ),
    };
  });
};

export const mapAreaDataset = (rawData: IData[], color: string) => {
  const regionIdList = rawData
    .map((ele) => ele.id)
    .reduce(
      (prev: string[], curr) => (prev.includes(curr) ? prev : [...prev, curr]),
      [],
    );

  return regionIdList.map((region) => {
    return {
      order: 2,
      type: 'line' as const,
      yAxisID: 'value_area',
      label: region,
      backgroundColor: color,
      hoverBackgroundColor: 'yellow',
      pointHoverRadius: 10,
      pointHoverBorderWidth: 3,
      pointHoverBorderColor: 'yellow',
      fill: true,
      spanGaps: true, // null 값 가진 곳을 중앙값으로 채움
      data: rawData.map((ele) =>
        ele.id === region
          ? { key: ele.tid, value: ele.value_area }
          : { key: ele.tid, value: null },
      ),
    };
  });
};
