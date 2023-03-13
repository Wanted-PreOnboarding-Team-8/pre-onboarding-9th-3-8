import { IData } from '@/interface/data';

const ChartCanvas = ({ data }: { data: IData[] }) => {
  return (
    <div style={{ border: 'solid 5px teal', padding: '10px' }}>
      {data.length > 0 && data[0].tid}
    </div>
  );
};

export default ChartCanvas;
