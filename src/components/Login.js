import Component from '../framework/Component';
import {bindAll} from "../utils";
import API from '../../API';

class Login extends Component {
    constructor() {
        super();
        bindAll(this, 'onSubmit');
        this.host = document.createElement('div');
        this.host.classList.add('form-wrapper');
        this.host.addEventListener('submit', this.onSubmit);

        this._api = new API();
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {};
        data.username = e.target.login.value.trim();
        data.password = e.target.password.value.trim();
        console.log(data);
        this._api.login(data);
    }

    render() {
        return `<form>
                    <fildset>
                        <legend>Login page</legend>
                        <label for="login">Enter login</label>
                        <input type="text" placeholder="Login" id="login" name="login" required>
                        <label for="password">Enter password</label>
                        <input type="password" id="password" name="password" required>
                        <input type="submit" value="SUBMIT" id="submit">
                    </fildset>
                    <a href="#">Don't have an account? Go to registration.</a>
                </form>`;
    }
}

export default Login;
