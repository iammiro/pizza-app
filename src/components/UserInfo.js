import Component from '../framework/Component';
import API from '../../API';

class UserInfo extends Component{
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.host = document.createElement('div');
        this.host.classList.add('user-info-wrapper');
        this.host.addEventListener('submit', this.onSubmit);

        this._api = new API();
    }

    onSubmit(e){
        e.preventDefault();
        e.target && e.target.matches(`.user-info-wrapper`);
        const data = {};

        console.log(data);
        this._api.showInfo(data);
    }

    render() {
        this.host.innerHTML = '';
        return this.host.innerHTML = `<form>
                                            <fildset>
                                                <legend>Registration page</legend>
                                                <label for="login">Enter name</label>
                                                <input type="text" placeholder="Login" id="login" required>
                                                <label for="email">Enter your email</label>
                                                <input type="email" placeholder="Email" id="email" required>
                                                <label for="password">Chose password</label>
                                                <input type="password" id="password" required>
                                                <label for="password_repeat">Repeat password</label>
                                                <input type="password" id="password_repeat" required>
                                                <input type="submit" value="SUBMIT" id="submit">
                                            </fildset>
                                            <a href="#">Have an account? Go to login.</a>
                                        </form>`;
    }

}

export default UserInfo;
