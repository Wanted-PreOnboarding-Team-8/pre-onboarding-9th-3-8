import { IChartRegionSelectProps } from '@/interface/props';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChartRegionSelect = ({ region }: IChartRegionSelectProps) => {
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState('');

  const handleClick = (id: string) => {
    setActiveButton(id);
    navigate(`?region=${id}`);
  };

  const handleResetButton = () => {
    setActiveButton('');
    navigate('/');
  };

  return (
    <div>
      {region.map((id) => {
        return (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`btn ${activeButton === id ? 'active' : ''}`}
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
