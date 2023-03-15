import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './ChartFilter.module.css';

type Props = {
  filterList: string[];
};

const ChartFilter = ({ filterList }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.name;
    const idList = searchParams.getAll('id');

    if (e.target.checked) {
      setSearchParams({ id: [...idList, selectedId] });
    } else {
      const filtered = idList.filter((id) => id !== selectedId);
      setSearchParams({ id: filtered });
    }
  };

  return (
    <ul className={styles.filter_list}>
      {filterList.map((item, i) => (
        <li key={i} className={styles.filter_item}>
          <label htmlFor={item}>
            <input type="checkbox" id={item} name={item} onChange={onChange} />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ChartFilter;
