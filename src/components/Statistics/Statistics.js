import React from 'react';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  // console.log(stats);
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(el => {
          // console.log(el);
          return <StatisticsItem el={el} key={el.id} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;

StatisticsItem.defaultProps = {
  title: 'statistics',
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array,
};
