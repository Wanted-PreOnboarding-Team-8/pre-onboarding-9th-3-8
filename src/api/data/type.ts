import { IChartData } from '@/interface/chart';

export interface IDataResponse {
  type: string;
  version: number;
  response: IChartData;
}
