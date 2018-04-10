import Component from '../framework/Component';

class PizzaConstructor extends Component {
    constructor() {
        super();
        this.host = document.createElement('div');
        this.host.classList.add('pizza-constructor-wrapper');
    }

    render() {
        this.host.innerHTML = '';
        return this.host.innerHTML = `<div></div>`;
    }

}

export default PizzaConstructor;
