import {clearChildren} from "./src/utils";
import API from './API';
import App from 'App'

const app = new App();
const root = clearChildren(document.getElementById('root'));

root.appendChild(app.host);
