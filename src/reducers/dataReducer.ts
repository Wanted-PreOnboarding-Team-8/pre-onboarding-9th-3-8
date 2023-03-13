import { IDataSet, dataSetActionType } from '@/interface/data';
import { transObjToArr } from '@/lib/utils/transformDataShape';

export const initialDatasetState = {
  type: '',
  version: 0,
  response: [],
};

export const dataReducer = (state: IDataSet, action: dataSetActionType) => {
  switch (action.type) {
    case 'fetch-success':
      return transObjToArr(state, action);
    //    case 'fetch-fail':
    default:
      throw Error('no action type matched');
  }
};
