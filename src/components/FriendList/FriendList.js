import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friendsDb }) => {
  // console.log(friendsDb);
  return (
    <ul className={styles.friendList}>
      {friendsDb.map(el => {
        // console.log(el);
        return (
          <li className={styles.item} key={el.id}>
            <span
              className={el.isOnline ? styles.statusOn : styles.status}
            ></span>

            <img
              className={styles.avatar}
              src={el.avatar}
              alt={el.name}
              width="48"
            />
            <p className={styles.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friendsDb: PropTypes.array.isRequired,
};
