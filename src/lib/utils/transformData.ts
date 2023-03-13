import { Chartdata } from '@/components/Chart';

const transformData = (Chartdatas: Chartdata) => {
  const transformedData = Object.entries(Chartdatas).map(([time, values]) => ({
    time,
    ...values,
  }));
  return transformedData;
};

export default transformData;
