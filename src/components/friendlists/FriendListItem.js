import css from './Friend.module.css'
import PropTypes from "prop-types";
export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.statuson : css.statusoff}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};