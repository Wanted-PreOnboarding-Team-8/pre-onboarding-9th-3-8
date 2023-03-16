import { IFilterProps } from '@/interface/props';

const ChartFilters = ({
  regions,
  filtered: selected,
  setFiltered,
}: IFilterProps) => {
  return (
    <div className="chartFilters">
      {regions.map((region) => (
        <button
          className={region === selected ? 'selectedFilterBtn' : ''}
          key={region}
          onClick={() => setFiltered(!selected ? region : null)}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default ChartFilters;
