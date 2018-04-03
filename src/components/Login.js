import Component from '../framework/Component';

class Login extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.host = document.createElement('div');
        this.host.classList.add('form-wrapper');
        this.host.addEventListener('submit', this.onSubmit)
    }

    onSubmit(e) {
        e.preventDefault();

        e.target && e.target.matches(`.form-wrapper`);

        const userData = {
            login: e.target.elements.password.trim(),
            password: e.target.elements.password.trim(),
        };

        return userData;
    }

    render() {
        return `<form>
                    <fildset>
                        <legend>Login page</legend>
                        <label for="login">Enter login</label>
                        <input type="text" placeholder="Login" id="login" name="login" required>
                        <label for="password">Enter password</label>
                        <input type="password" id="password" name="password" required>
                        <input type="button" value="SUBMIT">
                    </fildset>
                    <a href="#">Don't have an account? Go to registration.</a>
                </form>`;
    }

}

export {Login};
