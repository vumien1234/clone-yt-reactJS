import HeaderOnly from '../Header/Header-Only/HeaderOnly';
import Home from '../Pages/Home/home';
import Library from '../Pages/library/library';
import Shorts from '../Pages/Shorts/shorts';
import Subcribe from '../Pages/SubsCribe/subscribe';
import Register from '../Pages/Register/register';
const PublicRouter = [
    {path:'/',component:Home},
    {path:'/library',component:Library},
    {path:'/shorts',component:Shorts,layout:HeaderOnly},
    {path:'/subscribe',component:Subcribe},
    {path:'/register',component:Register},
]
export {PublicRouter}