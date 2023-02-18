import { FriendListItem } from "./FriendListItem"
import css from './Friend.module.css'
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => {
                return <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            })}
        </ul>
     )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};