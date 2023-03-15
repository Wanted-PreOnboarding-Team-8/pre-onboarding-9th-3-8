import { useEffect, useReducer, useRef } from 'react';
import productApi from '@/api/Flexsys';
import {
  dataReducer,
  initialDatasetState as initData,
} from '@/reducers/dataReducer';
import ChartCanvas from './ChartCanvas';
import * as plugins from '@/lib/utils/chartPlugin';
import { colors } from '@/constants/theme';
import { options } from '@/lib/utils/chartOptions';
import { mapBarDataset, mapAreaDataset } from '@/lib/utils/transformDataShape';

const ChartBoard = () => {
  const [data, dispatch] = useReducer(dataReducer, initData);
  const filter = useRef({
    backgroundColor: colors.skyblue_light,
    hoverBackgroundColor: colors.tomato,
  });
  const datasets = [
    ...mapBarDataset(data.response, colors.skyblue),
    ...mapAreaDataset(data.response, colors.skyblue_light),
  ];

  useEffect(() => {
    productApi
      .getProducts()
      .then((res) => dispatch({ type: 'fetch-success', payload: res }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ border: 'solid 5px teal', padding: '10px' }}>
      <h2>ChartBoard</h2>
      <p>controll data / filter / options / plugins</p>
      <div>
        <p>type: {data.type}</p>
        <p>version: {data.version}</p>
      </div>
      <ChartCanvas
        filteredData={datasets}
        options={options(datasets)}
        plugins={[plugins.backgroundColor]}
      />
    </div>
  );
};

export default ChartBoard;
