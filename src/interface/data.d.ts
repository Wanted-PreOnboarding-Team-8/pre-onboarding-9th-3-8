export type dataSetActionType = any;

export interface IData {
  tid: string;
  id: string;
  value_area: number;
  value_bar: number;
}

export interface IDataSet {
  type: string;
  version: number;
  response: IData[];
}
