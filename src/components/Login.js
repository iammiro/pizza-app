class Login {
    constructor() {
        this.onSubmit = this.onSubmit.bind(this);
        this.host = document.createElement('div');
        this.host.classList.add('form-wrapper');
        this.host.addEventListener('submit', this.onSubmit)
    }

    onSubmit(e) {
        e.target && e.target.matches(`.form-wrapper`);

        const userData = {
            username: e.target.username.value,
            password: e.target.password.value,
            password_repeat: e.target.password_repeat.value,
            email: e.target.email.value,
            store_id: e.target.store_id.value,
            store_password: e.target.store_password.value,


        };

        return userData;
    }

    render() {
        return `<form>
                    <fildset>
                        <legend>Login page</legend>
                        <label for="login">Enter login</label>
                        <input type="text" placeholder="Login" id="login" required>
                        <label for="password">Enter password</label>
                        <input type="password" id="password" required>
                        <input type="button" value="SUBMIT">
                    </fildset>
                    <a href="#">Don't have an account? Go to registration.</a>
                </form>`;
    }

}

export {Login};
