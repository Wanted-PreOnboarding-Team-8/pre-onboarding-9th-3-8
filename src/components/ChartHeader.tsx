import { IChartHeaderProps } from '@/interface/props';

const ChartHeader = ({ type, version, period }: IChartHeaderProps) => {
  return (
    <div className="chartHeader">
      <p>타입 : {type}</p>
      <p>버전 : {version}</p>
      <p>
        기간 : {period.start} ~ {period.end}
      </p>
    </div>
  );
};

export default ChartHeader;
