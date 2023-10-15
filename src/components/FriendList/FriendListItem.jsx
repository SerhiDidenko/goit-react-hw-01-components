import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className={css.item}>
        <span className={css[isOnline ? 'online' : 'offline']}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{ name }</p>
    </li>
}