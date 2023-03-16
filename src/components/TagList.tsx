import { useSearchParams } from 'react-router-dom';
import styles from './ChartFilter.module.css';
const TagList = () => {
  const [searchParams] = useSearchParams();
  const idList = searchParams.getAll('id');

  return (
    <ul className={styles.tag_list}>
      {idList.map((id, index) => {
        return (
          <li key={index} className={styles.tag_item}>
            <span>{id}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
