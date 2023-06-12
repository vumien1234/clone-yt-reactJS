import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser, faChevronRight, faCircleQuestion, faCircleUser,faGear,faGlobe,faKeyboard,faLanguage,faMoon,faRightFromBracket,faSackDollar,faUser, faUserShield } from "@fortawesome/free-solid-svg-icons";
import {faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";

export const MENU_ITEM = [
    {
        icon:<FontAwesomeIcon icon={faUser}/>,
        title:'Kênh của bạn',
    },
    {
        icon:<FontAwesomeIcon icon={faYoutubeSquare}/>,
        title:'YouTube Studio',
    },
    {
        icon:<FontAwesomeIcon icon={faChalkboardUser}/>,
        icon1:<FontAwesomeIcon icon={faChevronRight}/>,
        title:'Chuyển đổi tài khoản',
    },
    {
        icon:<FontAwesomeIcon icon={faRightFromBracket}/>,
        title:'Đăng xuất',
    },
    {
        icon:<FontAwesomeIcon icon={faSackDollar}/>,
        title:'Giao dịch mua gói thành viên',
    },
    {
        icon:<FontAwesomeIcon icon={faCircleUser}/>,
        title:'Dữ liệu của bạn trong YouTube',
    },
    {
        icon:<FontAwesomeIcon icon={faMoon}/>,
        icon1:<FontAwesomeIcon icon={faChevronRight}/>,
        title:'Giao diện',
    },
    {
        icon:<FontAwesomeIcon icon={faLanguage}/>,
        icon1:<FontAwesomeIcon icon={faChevronRight}/>,
        title:'Ngôn Ngữ',
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "Afrikaans",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Bahasa indonesia",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Bahasa Malaysia",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Bosanski",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Dansk",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Eesti",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English(UK)",
                },
                
                {
                    type: "language",
                    code: "en",
                    title: "English(US)",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Galego",
                },
                {
                    type: "language",
                    code: "en",
                    title: "IsiZulu",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Magyar",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Norsk",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Galego",
                },
                {
                    type: "language",
                    code: "en",
                    title: "Suomi",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng việt",
                },
            ],
        },
    },
    {
        icon:<FontAwesomeIcon icon={faUserShield}/>,
        icon1:<FontAwesomeIcon icon={faChevronRight}/>,
        title:'Chế độ hạn chế',
    },
    {
        icon:<FontAwesomeIcon icon={faGlobe}/>,
        icon1:<FontAwesomeIcon icon={faChevronRight}/>,
        title:'Địa điểm',
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title:'Phím tắt',
    },
    {
        icon:<FontAwesomeIcon icon={faGear}/>,
        title:'Cài đặt',
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion}/>,
        title:'Trợ giúp',
    },
    
    
];
