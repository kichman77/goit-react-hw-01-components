import React from 'react';
import styles from './TransactionHistory.module.css';
import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.thead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          // console.log(el);
          return <TransactionItem key={el.id} el={el} />;
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
