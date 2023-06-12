import Header from "../../Header/header-All/header";
import SlideBar from '../Slide-bar/slideBar';
import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";
const cx = classNames.bind(styles);
function DefaultLayout({children}) {
    return (
        <div className={cx('Container')}>
            <Header/>
            <div className={cx('Container-Body')}>
                <SlideBar/>
                <div className={cx('Content-body')}>
                    {children}
                </div>
            </div>
        </div>
    
    );
}

export default DefaultLayout;