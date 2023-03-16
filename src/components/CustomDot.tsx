import { CustomDotProps } from '@/interface/props';

const CustomDot = (props: CustomDotProps) => {
  const { cx, cy, payload, region } = props;

  if (!region) {
    return null;
  }

  const regionList = region.split(',');

  if (payload?.id && regionList.includes(payload.id)) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={5}
        stroke="black"
        strokeWidth={3}
        fill="black"
      />
    );
  }

  return null;
};

export default CustomDot;
