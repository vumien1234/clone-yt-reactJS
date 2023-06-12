import classNames from "classnames/bind";
import styles from "./header.module.scss";
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from "@tippyjs/react/headless";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faKeyboard,
  faSearch,
  faXmark,
  faBell,
  faFolderPlus,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import LogoHeader from "../../image/logo.png";
import ImageAccount from "../../image/avata1.png";
import ReSultHeader from "./Box-result-header/Result-header";
import AcountMenu from '../Account-menu/account-menu';
import { MENU_ITEM } from "../Account-menu/data-account-menu/data-account-menu";
const cx = classNames.bind(styles);

function Header() {

    const LocalStorage = JSON.parse(localStorage.getItem('searchInput'))
    const [searchInput, setSearchInput] = useState("");
    const [Results, setResults] = useState(LocalStorage ?? []);
    const [EventResult,setEventResult] = useState(true)

    const handleChange = () => {
        if(searchInput !== ''){
            setResults(prev => {
                const str = [...prev,searchInput]
                const JsonState = JSON.stringify(str)
                localStorage.setItem('searchInput',JsonState)
                return str
            })
        }
    };

    const handleKeydown = (event)=>{
        if(event.key === 'Enter'){
            handleChange();
        }
    }
    const handleRemove = () =>{
        setSearchInput('');
    }
    const handleHideResult = ()=>{
        setEventResult(false)
    }
    return (
        <div className={cx("Container-header")}>
            <div className={cx("wrapper")}>
                <div className={cx("logo-header")}>
                    <div className={cx("icon-menu-header")}>
                        <div className={cx('wrapper-menu-header')}>
                            <FontAwesomeIcon  icon={faBars} />
                        </div>
                    </div>
                
                <div className={cx("icon-logo-header")}>
                    <Link to={'/'}><img src={LogoHeader} alt="" /></Link>
                </div>
                </div>
                <div className={cx("search-box")}>
                    <div className={cx("search-header")}>
                        <HeadlessTippy
                            interactive
                            onClickOutside={handleHideResult}
                            visible = {EventResult && searchInput.length > 0}
                            render={(attrs) => (
                                <div className={cx("box-result")} tabIndex="-1" {...attrs}>
                                    <ReSultHeader>
                                        <ul className={cx("list-result-search")}>
                                        {Results.map((result, index) => (
                                            <li key={index}>
                                            {result}
                                            <span className={cx("remove-result")}>xóa</span>
                                            </li>
                                        ))}
                                        </ul>
                                    </ReSultHeader>
                                </div>
                            )}
                        >
                        <div className={cx("search-input-header")}>
                            <input
                            onFocus={()=>setEventResult(true)}
                                onKeyDown={handleKeydown}
                                onChange={(e) => setSearchInput(e.target.value)}
                                value={searchInput}
                                placeholder="Tìm kiếm"
                            />
                            <div className={cx("icon-input-header")}>
                            <FontAwesomeIcon
                                className={cx("icon-keybroad")}
                                icon={faKeyboard}
                            />
                            {!! searchInput && (
                                <button className={cx("icon-remove")}>
                                    <FontAwesomeIcon
                                        onClick={handleRemove}
                                        icon={faXmark}
                                    />
                                </button>
                            )}
                            </div>
                        </div>
                        </HeadlessTippy>
                        <Tippy
                            className={cx("css-Tippy-header")}
                            arrow={false}
                            content="Tìm kiếm"
                        >
                        <button
                            onClick={handleChange}
                            className={cx("button-search-header")}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        </Tippy>
                    </div>
                    <Tippy
                        className={cx("css-Tippy-header")}
                        arrow={false}
                        content="Tìm kiếm bằng giọng nói"
                    >
                        <button className={cx("search-micro")}>
                        <FontAwesomeIcon icon={faMicrophone} />
                        </button>
                    </Tippy>
                </div>
                <div className={cx("action-header")}>
                    <Tippy className={cx("css-Tippy-header")} arrow={false} content="Tạo">
                        <button className={cx("create-header")}>
                        <FontAwesomeIcon icon={faFolderPlus} />
                        </button>
                    </Tippy>
                    <Tippy
                        className={cx("css-Tippy-header")}
                        arrow={false}
                        content="Thông báo"
                    >
                        <button className={cx("Notification-header")}>
                        <FontAwesomeIcon icon={faBell} />
                        </button>
                    </Tippy>

                    <AcountMenu
                        items={MENU_ITEM}
                    >
                        <div className={cx("Account")}>
                            <img src={ImageAccount} alt="" />
                        </div>
                    </AcountMenu>
                </div>
            </div>
        </div>
    );
}

export default Header;
