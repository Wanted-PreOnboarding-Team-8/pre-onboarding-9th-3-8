import React from 'react';
import styles from './ChartFilter.module.css';

type Props = {
  filterList: string[];
};

const ChartFilter = ({ filterList }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: set filter
  };
  return (
    <ul className={styles.filter_list}>
      {filterList.map((item, i) => (
        <li key={i} className={styles.filter_item}>
          <label htmlFor={item}>
            <input type="checkbox" id={item} onChange={onChange} />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ChartFilter;
