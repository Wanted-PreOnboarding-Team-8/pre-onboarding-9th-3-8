import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './ChartFilter.module.css';

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

type ItemProps = {
  id: string;
};
const FilterItem = ({ id }: ItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const idList = searchParams.getAll('id');

  useEffect(() => {
    if (idList.includes(id)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [id, idList]);

  const onChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setSearchParams({ id: [...idList, id] });
    } else {
      const filtered = idList.filter((i) => i !== id);
      setSearchParams({ id: filtered });
    }
  };

  return (
    <li className={styles.filter_item}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          checked={isChecked}
          id={id}
          name={id}
          onChange={onChange}
        />
        {id}
      </label>
    </li>
  );
};

export { FilterList, FilterItem };
