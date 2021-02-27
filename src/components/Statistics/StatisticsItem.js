import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatisticsItem = ({ el }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{el.label}</span>
      <span className={styles.percentage}>{el.percentage}%</span>
    </li>
  );
};
export default StatisticsItem;

StatisticsItem.propTypes = {
  el: PropTypes.object.isRequired,
};
