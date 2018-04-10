import style from './src/css/styles.css';
import Component from "./src/framework/Component";
import {AuthService} from './src/utils/parseJwtClaims'
// import UserInfo from './src/components/UserInfo';

class API extends Component {
    constructor() {
        super();
        this._authService = new AuthService();
        this.host = document.createElement('div');
        this.host.classList.add('container');
        // this._userInfo = new UserInfo();
    }

    parseJwtToken() {
        const auth = window.localStorage;
        const token = auth.getItem('token');
        return this._authService.parseJwtClaims(token);
    }

    getStoreListFromApi() {
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        fetch('https://pizza-tele.ga/api/v1/store/list', {
            method: 'GET',
            headers,
        })
            .then(res => res.json())
            .then(
                // console.log
            );
    }

    login(data) {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        return fetch('https://pizza-tele.ga/api/v1/user/login', {
            body: JSON.stringify(data),
            method: 'POST',
            headers,
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                return res.token;
            })
            .then(function (token) {
                const auth = window.localStorage;
                auth.setItem(`token`, `${token}`);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    showInfo() {
        const headers = new Headers();
        const auth = window.localStorage;
        const token = auth.getItem('token');

        headers.append('content-type', 'application/json');
        headers.append('authorization', `Bearer ${token}`);
        fetch('https://pizza-tele.ga/api/v1/user/my_info', {
            method: 'GET',
            headers,
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                console.log(res);
                // this._userInfo.render(res);
                return res;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    logOut() {
        const auth = window.localStorage;
        auth.removeItem('token');
    }

    register(data) {
        const headers = new Headers();
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        fetch('https://pizza-tele.ga/api/v1/user/create', {
            body: JSON.stringify(data),
            method: 'POST',
            headers,
        })
            .then(res => res.json())
            .then(console.log);
    }

    get isAuthorized() {
        const parsedToken = this.parseJwtToken();
        const expirationTime = parsedToken.exp;
        const date = new Date(expirationTime * 1000);
    }
}

export default API;
