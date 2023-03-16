import FilterList from './FilterList';
import TagList from './TagList';

type Props = {
  filterList: string[];
};

const ChartFilter = ({ filterList }: Props) => {
  return (
    <div>
      <FilterList filterList={filterList} />
      <TagList />
    </div>
  );
};

export default ChartFilter;
