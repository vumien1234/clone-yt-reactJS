import classNames from "classnames/bind";
import styles from "./button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const classes = cx("wrapper-button");
function Button({
    children,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    onBack,
    ...passProps
    }) {
    let Comp = "button";
    const props = {
        onClick,
        ...passProps,
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = "a";
    }
    return (
        <Comp className={classes} {...props}>
        {leftIcon && <span className={cx("leftIcon")}>{leftIcon}</span>}
        <span className={cx("title")}>{children}</span>
        {rightIcon && <span className={cx("rightIcon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
