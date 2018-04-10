import Component from '../framework/Component';

class Dashboard extends Component{
    constructor() {
        super();
        this.host = document.createElement('div');
        this.host.classList.add('dashboard-wrapper');
    }

    render() {
        this.host.innerHTML = '';
        return this.host.innerHTML = `<div></div>`;
    }

}

export default Dashboard;
