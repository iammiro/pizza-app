class Login {
    constructor() {
        this.host = document.getElementById('root');
    }

    render() {
        this.host.innerHTML = '';
        return this.host.innerHTML = `<form>
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
