import apiClient from '@/api';
import { IFetchData } from '@/interface/chartData';

export const getData = (url: string): Promise<{ data: IFetchData }> => {
  try {
    return apiClient.get(url);
  } catch (e) {
    throw new Error('데이터가 없습니다.');
  }
};
