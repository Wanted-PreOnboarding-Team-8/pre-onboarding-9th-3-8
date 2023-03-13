import { TooltipProps } from 'recharts';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: '#fff', padding: '10px' }}
      >
        <p className="label">{`id : ${payload[0].payload.id}`}</p>
        <p className="desc">{`value_bar : ${payload[0].payload.value_bar}`}</p>
        <p className="desc">{`value_area : ${payload[0].payload.value_area}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
