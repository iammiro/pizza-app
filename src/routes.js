import App from '../App';
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Dashboard from './components/Dashboard';
import PizzaConstructor from './components/PizzaConstructor';

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
    },
    {
        component: Dashboard,
        href: '/Dashboard'
    },
    {
        component: PizzaConstructor,
        href: '/PizzaConstructor'
    }
];
