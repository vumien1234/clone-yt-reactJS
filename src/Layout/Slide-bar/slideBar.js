import classNames from "classnames/bind";
import styles from "./slideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faFileVideo, faHome} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import MenuItem from "./Menu/menuItem";
import Listmenu from "../Slide-bar/list-menu/listMenu";
const cx = classNames.bind(styles);
function SlideBar() {
    return (
        <div className={cx('box-menu')}>
            <div className={cx('wrapper-slideBar')}>
                <MenuItem title="Trang chủ" to={'/'} icon={<FontAwesomeIcon icon = {faHome} />}/>
                <MenuItem title="Shorts" to={'/shorts'} icon = {<FontAwesomeIcon icon={faCirclePlay}/>}/>
                <MenuItem title="Kênh đăng kí" to={'/register'} icon = {<FontAwesomeIcon icon={faYoutube}/>}/>
                <MenuItem title="Thư viện" to={'/library'} icon = {<FontAwesomeIcon icon={faFileVideo}/>}/>
            </div>
             {/**<div className={cx('select-menu')}><Listmenu/></div> */}
        </div> 
        
        
    );
}

export default SlideBar;