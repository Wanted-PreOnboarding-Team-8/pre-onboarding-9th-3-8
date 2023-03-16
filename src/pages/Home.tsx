import Chart from '@/components/Chart';
import ChartFilter from '@/components/ChartFilter';
import useChart from '@/lib/hooks/useChart';
import styles from './Home.module.css';

const Home = () => {
  const { charts, start, end } = useChart();
  const idList = Array.from(new Set(charts.map((value) => value.id)));

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <h1>Flexys Chart</h1>
        <span>
          <span className={styles.date}>{start}</span>부터{' '}
          <span className={styles.date}>{end}</span>까지의 시계열 차트입니다.
        </span>
      </section>
      <section className={styles.filters}>
        <h3>filters</h3>
        <ChartFilter filterList={idList} />
      </section>
      <section className={styles.chart}>
        <Chart data={charts} />
      </section>
    </div>
  );
};

export default Home;
