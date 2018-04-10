import App from '../App';
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";

export default [
    {
        component: App,
        href: '/'
    },
    {
        component: Registration,
        href: '/Registration'
    },
    {
        component: Login,
        href: '/login'
    },
    {
        component: UserInfo,
        href: '/UserInfo'
    }
];
