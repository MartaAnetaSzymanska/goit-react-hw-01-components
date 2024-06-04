import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";

export const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <li key={friend.id} className={styles.item}>
        <span
          className={`${styles.status} ${friend.isOnline ? styles.online : styles.offline}`}></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};
