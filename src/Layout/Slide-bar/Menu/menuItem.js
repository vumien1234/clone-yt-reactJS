import classNames from 'classnames/bind';
import styles from './menuItem.module.scss';
import {NavLink} from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuItem({to,title,icon}) {
    return (
        <NavLink className={(nav) => cx('menu-item',{active:nav.isActive})} to={to} >
            <div className={cx('box-item')}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </div>
        </NavLink>
    );
}

export default MenuItem;