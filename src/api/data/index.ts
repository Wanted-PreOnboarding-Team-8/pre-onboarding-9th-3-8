import apiClient from '../apiClient';
import { IDataResponse } from './type';

export const getData = () =>
  apiClient.get<IDataResponse>('/mock/mockdata.json');
