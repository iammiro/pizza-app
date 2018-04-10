import {clearChildren} from "./src/utils";
import App from './App';
import Router from './src/framework/Router';
import routes from './src/routes';

const router = new Router(routes);

const init = new App();

const root = clearChildren(document.getElementById('root'));

root.appendChild(router.host);

init.update();
