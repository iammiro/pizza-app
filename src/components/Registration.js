class Registration {
    constructor() {
        this.host = document.getElementById('root');
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
                                                <input type="button" value="SUBMIT">
                                            </fildset>
                                            <a href="#">Have an account? Go to login.</a>
                                        </form>`;
    }

}

export {Registration};
