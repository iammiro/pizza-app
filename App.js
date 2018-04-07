import style from './src/css/styles.css';
import Component from './src/framework/Component';
import Login from "./src/components/Login";
import Registration from "./src/components/Registration";
import UserInfo from "./src/components/UserInfo";
import API from "./API"

class App extends Component {
    constructor() {
        super();
        this.host = document.createElement('div');
        this.host.classList.add('application-container');

        this._api = new API();
        this._login = new Login();
        this._registration = new Registration();
        this._userInfo = new UserInfo();
    }

    render() {
        const toRender = [
            // this._login.update(),
            // this._registration.update(),
            this._userInfo.update()
        ];
        this._api.showInfo();
        this._api.getStoreListFromApi();
        this._api.isAuthorized;
        console.log(this._api.parseJwtToken());
        return toRender;
    }
}

export default App;
