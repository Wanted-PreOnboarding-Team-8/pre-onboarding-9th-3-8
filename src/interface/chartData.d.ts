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

interface IChartValue {
  dateTime: string;
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IChartDataset {
  type: string;
  version: number;
  value: IChartValue[];
}
