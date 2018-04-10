import style from './src/css/styles.css';
import {AuthService} from './src/utils/parseJwtClaims'

// import UserInfo from './src/components/UserInfo';

class API {
    constructor() {
        this._authService = new AuthService();
        this.host = document.createElement('div');
        this.host.classList.add('container');
        this.domain = 'https://pizza-tele.ga';
        this.ingredients_list = `${this.domain}/api/v1/ingredient/list`;
        this.tags = `${this.domain}/api/v1/tag/list `;
        // this._userInfo = new UserInfo();
    }

    parseJwtToken() {
        const auth = window.localStorage;
        const token = auth.getItem('token');
        return this._authService.parseJwtClaims(token);
    }

    getIngredients() {
        let ingredients = [];
        return this.get(this.ingredients_list).then(
            data => {
                ingredients = data.results;
                console.log(ingredients);
                return data.results;
            }
        )
    }

    getTags() {
        let tags = [];
        return this.get(this.tags).then(
            data => {
                tags = data.results;
                console.log(tags);
                return data.results;
            }
        )
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

    get(url) {
        const auth = window.localStorage;
        const token = auth.getItem('token');
        return fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).then(
            response => Promise.resolve(response.json()),
            response => Promise.reject(response.statusCode)
        )
    }

    get isAuthorized() {
        const parsedToken = this.parseJwtToken();
        const expirationTime = parsedToken.exp;
        const date = new Date(expirationTime * 1000);
        console.log(`Expiration time: ${date}`)
    }
}

export default API;
