import { useState, useEffect, useReducer } from 'react';
import productApi from '@/api/Flexsys';
import {
  dataReducer,
  initialDatasetState as initData,
} from '@/reducers/dataReducer';
import { IData } from '@/interface/data';
import ChartCanvas from './ChartCanvas';

const ChartBoard = () => {
  const [data, dispatch] = useReducer(dataReducer, initData);

  useEffect(() => {
    productApi
      .getProducts()
      .then((res) => dispatch({ type: 'fetch-success', payload: res }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ border: 'solid 5px teal', padding: '10px' }}>
      <h2>ChartBoard</h2>
      <div>
        <p>type: {data.type}</p>
        <p>version: {data.version}</p>
      </div>
      <ChartCanvas data={data.response} />
    </div>
  );
};

export default ChartBoard;
