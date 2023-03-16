export interface IFetchData {
  type: string;
  version: number;
  response: {
    [key: string]: {
      id: string;
      value_area: number;
      value_bar: number;
    };
  };
}

export interface IChartValue {
  dateTime: string;
  id: string;
  value_area: number;
  value_bar: number;
  value_highlight?: number | null; // 강조할 값을 추가 할 수 있음
}

export interface IChartDataset {
  type: string;
  version: number;
  value: IChartValue[];
}
