import classNames from "classnames/bind";
import styles from "./menuItem.module.scss";
import Button from '../../../Button/button';
const cx = classNames.bind(styles)
function MenuItem({data,onClick,onBack}) {
    return (
        <Button className={cx('menu-item')} onClick={onBack} rightIcon={data.icon1} leftIcon={data.icon} onClick={onClick}  >
            {data.title}
        </Button>
    )
}

export default MenuItem;