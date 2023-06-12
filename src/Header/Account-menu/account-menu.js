import classNames from "classnames/bind";
import styles from "./account-menu.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import Avata from '../../image/avata1.png';
import MenuItem from "./MenuItem/menuItem";
import { useState} from "react";
import HeaderMenu from "./MenuItem/header-menu";
const cx = classNames.bind(styles);

function AcountMenu({children,items=[]}) {

    // lịch sử đi vào trang 1 trang 2 ban đầu render ra list item
    const [history,setHisstory] = useState([{data: items}]);
    // lấy ra trang nhất , trang nhất luôn luôn là phần tử cuối mảng
    const curent = history[history.length - 1]

    const renderPopperMenu = ()=>{
        // return curent.map((item,index)=> <MenuItem key={index} data={item}/>)
        return curent.data.map((item,index) => {
            // nếu có children thì trả về true , không thì ob
            // click vào thằng nào có children thì nó là cha
            const isParent = !!item.children
            return <MenuItem 
            onClick={()=>{
                if(isParent){
                    setHisstory(prev => [...prev, item.children]);
                }
            }} key={index} data={item}/>
        })
    }
    return (
        <HeadlessTippy
            delay={[0,700]} 
            placement="left" offset={[-5, 20]}
            interactive
            // visible
            render={(attrs) => (
                <div className={cx("Account-Menu")} tabIndex="-1" {...attrs}>
                    {history.length === 1 && <div className={cx('header-menu')}>
                        <img src={Avata} alt=""/>
                        <div className={cx('title-header-menu')}>
                            <p>Mien Vu Thi</p>
                            <p>@MienVuTHi-uf9hf</p>
                            <a className={cx('account-google')} 
                            rel="noreferrer"
                                href="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=vi" target="_blank">
                                Quản lý tài khoản Google của bạn
                            </a>
                        </div> 
                    </div>
                    }
                    <div className={cx('content-menu')}>
                        {history.length > 1 && <HeaderMenu title="Chọn ngôn ngữ của bạn" onBack={()=>{
                            setHisstory(prev => prev.slice(0, prev.length -1))
                        }}/>}
                        {renderPopperMenu()}
                    </div>
                </div>
            )}
        >
        {children}
       </HeadlessTippy>
    );
}

export default AcountMenu;