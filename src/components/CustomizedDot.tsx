import { IDotProps } from '@/interface/props';

const CustomizedDot = ({ cx, cy, stroke, payload, district }: IDotProps) => {
  if (payload.id === district) {
    return (
      <svg x={cx - 3} y={cy - 3} fill="white">
        <g transform="translate(4 4)">
          <circle r="4" fill={stroke} />
          <circle r="2" fill={stroke} />
        </g>
      </svg>
    );
  }

  return null;
};

export default CustomizedDot;
