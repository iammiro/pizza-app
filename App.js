import {Component} from './framework';
import {Login} from "./src/components/Login";
import {Registration} from "./src/components/Registration";

class App extends Component {
    constructor() {
        super();
        this.host = document.createElement('div');
        this.host.classList.add('application-container');

        this._login = new Login();
        this._registration = new Registration();
    }

    render() {

        const toRender = [
            this._login.update(),
            this._registration.update()
        ];

        return toRender;
    }
}

export default App;