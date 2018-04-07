import Component from '../framework/Component';
import API from '../../API';

class Registration extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.host = document.createElement('div');
        this.host.classList.add('form-wrapper');
        this.host.addEventListener('submit', this.onSubmit);

        this._api = new API();
    }

    onSubmit(e) {
        e.preventDefault();
        const data = {};
        data.username = e.target.login.value.trim();
        data.email = e.target.email.value.trim();
        data.password = e.target.password.value.trim();
        data.password_repeat = e.target.password.value.trim();
        data.store_id = parseInt(e.target.store_id.value.trim());
        data.store_password = e.target.store_password.value.trim();
        console.log(data);
        this._api.register(data);
    }

    render() {
        this.host.innerHTML = '';
        return this.host.innerHTML = `<form>
                                            <fildset>
                                                <legend>Registration page</legend>
                                                <label for="login">Enter name</label>
                                                <input type="text" placeholder="Login" id="login" required>
                                                <label for="password">Chose password</label>
                                                <input type="password" id="password" required>
                                                <label for="password_repeat">Repeat password</label>
                                                <input type="password" id="password_repeat" required>
                                                <label for="email">Enter your email</label>
                                                <input type="email" placeholder="Email" id="email" required>
                                                <label for="store_id">Enter your store id</label>
                                                <input type="text" placeholder="store id" id="store_id" required>
                                                <label for="store_password">Enter your store password</label>
                                                <input type="password" id="store_password" required>
                                                <input type="submit" value="SUBMIT" id="submit">
                                            </fildset>
                                            <a href="#">Have an account? Go to login.</a>
                                        </form>`;
    }
}

export default Registration;
