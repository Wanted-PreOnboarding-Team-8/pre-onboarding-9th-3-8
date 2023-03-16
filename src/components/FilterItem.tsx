import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Chart.module.css';
import checked from '@/common/icons/checked.svg';

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
    <li className={`${styles.filter_item} ${isChecked && styles.checked}`}>
      <label htmlFor={id}>
        <input
          className={styles.filter_checkbox}
          type="checkbox"
          checked={isChecked}
          id={id}
          name={id}
          onChange={onChange}
        />

        {isChecked && (
          <div className={styles.checked_img}>
            <img src={checked} alt="checked" />
          </div>
        )}
        <span>{id}</span>
      </label>
    </li>
  );
};

export default FilterItem;
