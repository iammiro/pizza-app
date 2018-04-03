import style from './src/css/styles.css';
import Component from "./src/framework/Component";
import {AuthService} from './src/utils/parseJwtClaims'

class API extends Component {
    constructor() {
        super();
        this._authService = new AuthService();
        this.host = document.createElement('div');
        this.host.classList.add('container');

    }

    getStoreListFromApi(){
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        fetch('https://pizza-tele.ga/api/v1/store/list', {
            method: 'GET',
            headers,
        })
            .then(res => res.json())
            .then(console.log);
    }

    get() {

    }

    post() {

    }

    login() {
        const data = {
            "username": "iammiro",
            "password": "secret42"
        };

        const headers = new Headers();
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Content-Type', 'application/json');
        fetch('https://pizza-tele.ga/api/v1/user/login', {
            body: JSON.stringify(data),
            method: 'POST',
            headers,
        })
            .then(res => res.json())
            .then(console.log);
    }

    showInfo(){
        const headers = new Headers();
        headers.append('content-type', 'application/json');
        headers.append('authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjEzNDE0MDYsInVzZXJuYW1lIjoiaWFtbWlybyIsInV1aWQiOiI4NDc4MDhkOC00YTRlLTQ5MzgtYjJlZC02MzViNjQ5Y2U1NjQiLCJzdG9yZV9pZCI6MX0.vinKv8GadXMzMRkQRXltegQ_44z97wqG7uHULQB5i1s')
        fetch('https://pizza-tele.ga/api/v1/user/my_info', {
            method: 'GET',
            headers,
        })
            .then(res => res.json())
            .then(console.log);
    }

    logOut(){

    }

    register() {
        const data = {
            "username": "iammiro",
            "password": "dfkjw3#$trfds",
            "password_repeat": "dfkjw3#$trfds",
            "email": "mir.kolomiets@gmail.com",
            "store_id": 6,
            "store_password": "w&jXD4jVw2>!"
        };

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

    }
}

export default API;
