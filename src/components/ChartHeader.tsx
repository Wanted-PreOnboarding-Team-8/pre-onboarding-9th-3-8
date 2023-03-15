import { IChartHeaderProps } from '@/interface/props';

const ChartHeader = ({ type, version }: IChartHeaderProps) => {
  return (
    <div className="chartHeader">
      <p>Type: {type}</p>
      <p>Version: {version}</p>
    </div>
  );
};

export default ChartHeader;
