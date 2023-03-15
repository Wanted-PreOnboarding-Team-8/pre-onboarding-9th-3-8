import { IChartRegionSelectProps } from '@/interface/props';
import { useNavigate } from 'react-router-dom';

const ChartRegionSelect = ({ region }: IChartRegionSelectProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`?region=${id}`);
  };

  return (
    <>
      {region.map((id) => {
        return (
          <button key={id} onClick={() => handleClick(id)}>
            {id}
          </button>
        );
      })}
    </>
  );
};

export default ChartRegionSelect;
