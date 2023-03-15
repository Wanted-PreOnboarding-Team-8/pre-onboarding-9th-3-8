import { IChartRegionSelectProps } from '@/interface/props';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ChartRegionSelect = ({ regions }: IChartRegionSelectProps) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const region = searchParams.get('region');

  const handleClick = (id: string) => {
    navigate(`?region=${id}`);
  };

  const handleResetButton = () => {
    navigate('/');
  };

  return (
    <div>
      {regions.map((id) => {
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`btn ${region === id ? 'active' : ''}`}
          >
            {id}
          </button>
        );
      })}
      <button className="btn" onClick={handleResetButton}>
        초기화
      </button>
    </div>
  );
};

export default ChartRegionSelect;
