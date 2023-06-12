import classNames from "classnames/bind";
import styles from "./menuItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)
function HeaderMenu({title,onBack}) {
    return (
        <div className={cx('Header-menu')}>
            <button className={cx('back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <p className={cx('title')}>
                {title}
            </p>
        </div>
    );
}

export default HeaderMenu;