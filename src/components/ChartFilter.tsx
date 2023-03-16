import styles from './Chart.module.css';
import FilterItem from './FilterItem';

type Props = {
  filterList: string[];
};

const ChartFilter = ({ filterList }: Props) => {
  return (
    <ul className={styles.filter_list}>
      {filterList.map((item) => (
        <FilterItem key={item} id={item} />
      ))}
    </ul>
  );
};

export default ChartFilter;
