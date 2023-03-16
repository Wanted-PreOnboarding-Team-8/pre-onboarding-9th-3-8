import styles from './ChartFilter.module.css';
import FilterItem from './FilterItem';

type ListProps = {
  filterList: string[];
};
const FilterList = ({ filterList }: ListProps) => {
  return (
    <ul className={styles.filter_list}>
      {filterList.map((item) => (
        <FilterItem key={item} id={item} />
      ))}
    </ul>
  );
};

export default FilterList;
