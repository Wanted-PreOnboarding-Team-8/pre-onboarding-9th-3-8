import { IFilterProps } from '@/interface/props';

const ChartFilters = ({
  regions,
  filtered: selected,
  setFiltered,
}: IFilterProps) => {
  return (
    <div className="filters">
      <div className="filters_header">
        <p>필터를 선택하세요.</p>
      </div>
      <div className="filters_body">
        {regions.map((region) => (
          <button
            className={region === selected ? 'selected_filter_btn' : ''}
            key={region}
            onClick={() =>
              setFiltered(
                !selected ? region : selected !== region ? region : null,
              )
            }
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartFilters;
