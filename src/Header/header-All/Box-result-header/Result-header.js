import classNames from "classnames/bind";
import styles from './Result-header.module.scss';
const cx = classNames.bind(styles);
function ReSultHeader({children}) {
    return (
       <div className={cx('wrapper-result')}>
            {children}
        </div>
    );
}

export default ReSultHeader;