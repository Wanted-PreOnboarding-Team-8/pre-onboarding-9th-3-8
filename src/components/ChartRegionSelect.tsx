import { IChartRegionSelectProps } from '@/interface/props';
import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ChartRegionSelect = ({ regions }: IChartRegionSelectProps) => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');

  const handleClick = useCallback(
    (id: string) => {
      const regionList = region?.split(',') || [];
      const regionIndex = regionList.indexOf(id);

      if (regionIndex === -1) {
        regionList.push(id);
      } else {
        regionList.splice(regionIndex, 1);
      }

      setSearchParams({ region: regionList.join(',') });
    },
    [region, setSearchParams],
  );

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
            className={`btn ${region?.split(',').includes(id) ? 'active' : ''}`}
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
