import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({ el }) => (
  <tr>
    <td>{el.type}</td>
    <td>{el.amount}</td>
    <td>{el.currency}</td>
  </tr>
);

export default TransactionItem;

TransactionItem.propTypes = {
  el: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
