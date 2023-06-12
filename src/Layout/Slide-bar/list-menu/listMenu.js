import classNames from "classnames/bind";
import styles from "./list-menu.module.scss";
import MenuSlideBar from '../list-menu/Menu-slideBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faCirclePlay,faFileVideo} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
const cx = classNames.bind(styles);
function Listmenu() {
    return (
        <div className={cx('wrapper')}>
            <MenuSlideBar title="Trang chủ" to={'/'} icon={<FontAwesomeIcon icon = {faHome} />}/>
            <MenuSlideBar title="Shorts" to={'/shorts'} icon = {<FontAwesomeIcon icon={faCirclePlay}/>}/>
            <MenuSlideBar title="Kênh đăng kí" to={'/register'} icon = {<FontAwesomeIcon icon={faYoutube}/>}/>
            <MenuSlideBar title="Thư viện" to={'/library'} icon = {<FontAwesomeIcon icon={faFileVideo}/>}/>
            <MenuSlideBar title="Trang chủ" to={'/'} icon={<FontAwesomeIcon icon = {faHome} />}/>
            <MenuSlideBar title="Shorts" to={'/shorts'} icon = {<FontAwesomeIcon icon={faCirclePlay}/>}/>
            <MenuSlideBar title="Kênh đăng kí" to={'/register'} icon = {<FontAwesomeIcon icon={faYoutube}/>}/>
            <MenuSlideBar title="Thư viện" to={'/library'} icon = {<FontAwesomeIcon icon={faFileVideo}/>}/>
            <MenuSlideBar title="Trang chủ" to={'/'} icon={<FontAwesomeIcon icon = {faHome} />}/>
            <MenuSlideBar title="Shorts" to={'/shorts'} icon = {<FontAwesomeIcon icon={faCirclePlay}/>}/>
            <MenuSlideBar title="Kênh đăng kí" to={'/register'} icon = {<FontAwesomeIcon icon={faYoutube}/>}/>
            <MenuSlideBar title="Thư viện" to={'/library'} icon = {<FontAwesomeIcon icon={faFileVideo}/>}/>
            <MenuSlideBar title="Trang chủ" to={'/'} icon={<FontAwesomeIcon icon = {faHome} />}/>
            <MenuSlideBar title="Shorts" to={'/shorts'} icon = {<FontAwesomeIcon icon={faCirclePlay}/>}/>
            <MenuSlideBar title="Kênh đăng kí" to={'/register'} icon = {<FontAwesomeIcon icon={faYoutube}/>}/>
            <MenuSlideBar title="Thư viện" to={'/library'} icon = {<FontAwesomeIcon icon={faFileVideo}/>}/>
        </div>
    );
}

export default Listmenu;