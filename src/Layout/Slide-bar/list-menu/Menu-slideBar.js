import classNames from 'classnames/bind';
import styles from './list-menu.module.scss';
import {NavLink} from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuSlideBar({title,to,icon}) {
    return (
        <NavLink className={(nav) => cx('list-menu',{active:nav.isActive})} to={to} >
            <div className={cx('menu-slideBar')}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </div>
        </NavLink>
    );
}

export default MenuSlideBar;