import { IChartRegionSelectProps } from '@/interface/props';

const ChartRegionSelect = ({ region }: IChartRegionSelectProps) => {
  return (
    <>
      {region.map((id) => {
        return <button key={id}>{id}</button>;
      })}
    </>
  );
};

export default ChartRegionSelect;
