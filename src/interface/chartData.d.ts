export interface IRawData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IChartDataset extends IRawData {
  dateTime: string;
}
