import { IChartHeaderProps } from '@/interface/props';

const ChartHeader = ({ type, version, period }: IChartHeaderProps) => {
  return (
    <div className="chart_header">
      <p>타입 : {type}</p>
      <p>버전 : {version}</p>
      <p>
        기간 : {period.startDate} ~ {period.endDate}
      </p>
    </div>
  );
};

export default ChartHeader;
