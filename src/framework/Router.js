import Component from './Component';

import { isUrlParam, isEqualPaths, extractUrlParams } from '../utils';

const ANY_PATH = '*';

class Router extends Component {
    constructor(routes) {
        super();

        this.state = {
            activeRoute: null,
            activeComponent: null,
            routes,
        };

        this.host = document.createElement('div');

        window.addEventListener('hashchange', () =>
            this.handleUrlChange(this.path)
        );

        this.handleUrlChange(this.path);
    }

    get path() {
        return window.location.hash.slice(1);
    }

    handleUrlChange(url) {
        const { routes, activeRoute } = this.state;
        let nextRoute = routes.find(({ href }) => isEqualPaths(href, url));

        if (!nextRoute) {
            nextRoute = routes.find(({ href }) => href === ANY_PATH); //looking for any route
        }

        if (nextRoute && activeRoute !== nextRoute) {
            if (!!nextRoute.redirectTo) {
                return this.handleRedirect(nextRoute.redirectTo);
            }

            if (!!nextRoute.onEnter) {
                return this.handleOnEnter(nextRoute, url);
            }

            this.applyRoute(nextRoute, url);
        }
    }

    handleRedirect(url) {
        window.location.hash = url;
    }

    handleOnEnter(nextRoute, url) {
        const { href } = nextRoute;
        const params = extractUrlParams(href, url);

        nextRoute.onEnter(params, this.handleRedirect, nextRoute);
    }

    applyRoute(route, url) {
        const { href, component: Component } = route;
        const { activeComponent } = this.state;

        const componentInstance = new Component({
            params: extractUrlParams(href, this.path),
            replace: this.handleRedirect,
        });

        if (activeComponent) {
            activeComponent.unmount();
        }

        this.updateState({
            activeRoute: route,
            activeComponent: componentInstance,
        });
    }

    render() {
        return this.state.activeComponent.update();
    }
}

export default Router;










// import Registration from "../components/Registration";
// import Login from "../components/Login";
// import Component from "../framework/Component";
//
// class Router extends Component {
//     constructor(props) {
//         super();
//         this.props = props;
//         const {host, routes} = this.props;
//         this.registration = new Registration();
//         this.login = new Login();
//         this.handlerUrlChange = this.handlerUrlChange.bind(this);
//
//         this.host = props.host;
//
//         this.state = {
//             routes,
//             currentRoute: null,
//             currentComponent: null
//         };
//         window.addEventListener('hashchange', () => this.handlerUrlChange(this.path));
//     }
//
//     get path() {
//         return this.hash = window.location.hash.slice(1);
//     }
//
//     handlerUrlChange(path) {
//         const {routes} = this.props;
//         const nextRout = routes.find(({href}) => href === this.path);
//         console.log(nextRout);
//
//         if (nextRout) {
//             this.updateState({
//                 activeComponent: new nextRout.component(),
//                 currentRoute: nextRout
//             })
//         }
//
//         if (this.path === '/Registration' || this.path === '/' || this.path === '') {
//             this.registration.render();
//         } else if (this.path === '/Login') {
//             this.login.render();
//         }
//     }
//
//     render() {
//         if (this.path === '/Registration' || this.path === '/' || this.path === '') {
//             this.registration.render();
//         } else if (this.path === '/Login') {
//             this.login.render();
//         }
//     }
// }
//
// export {Router};
