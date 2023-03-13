import { useState, useEffect, useReducer } from 'react';
import productApi from '@/api/Flexsys';
import {
  dataReducer,
  initialDatasetState as initData,
} from '@/reducers/dataReducer';

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
      <div>
        {data.response.length > 0 &&
          data.response.map((ele: any) => (
            <div key={ele.tid}>
              {ele.tid} - {ele.id} - {ele.value_area} - {ele.value_bar}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChartBoard;
