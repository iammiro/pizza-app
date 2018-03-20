import {Registration} from "../components/Registration";
import {Login} from "../components/Login";
import Component from "../framework/Component";

class Router extends Component {
    constructor(props) {
        super();
        this.props = props;
        const {host, routes} = this.props;
        this.registration = new Registration();
        this.login = new Login();
        this.handlerUrlChange = this.handlerUrlChange.bind(this);

        this.host = props.host;

        this.state = {
            routes,
            currentRoute: null,
            currentComponent: null
        };
        window.addEventListener('hashchange', () => this.handlerUrlChange(this.path));
    }

    get path() {
        return this.hash = window.location.hash.slice(1);
    }

    handlerUrlChange(path) {
        const {routes} = this.props;
        const nextRout = routes.find(({href}) => href === this.path);
        console.log(nextRout);

        if (nextRout) {
            this.updateState({
                activeComponent: new nextRout.component(),
                currentRoute: nextRout
            })
        }

        if (this.path === '/Registration' || this.path === '/' || this.path === '') {
            this.registration.render();
        } else if (this.path === '/Login') {
            this.login.render();
        }
    }

    render() {
        if (this.path === '/Registration' || this.path === '/' || this.path === '') {
            this.registration.render();
        } else if (this.path === '/Login') {
            this.login.render();
        }
    }
}

export {Router};
