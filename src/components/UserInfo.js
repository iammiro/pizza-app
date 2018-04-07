import Component from '../framework/Component';
import API from '../../API';

class UserInfo extends Component{
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.host = document.createElement('div');
        this.host.classList.add('user-info-wrapper');

        this._api = new API();
    }

    onSubmit(e){
        e.preventDefault();
        e.target && e.target.matches(`.user-info-wrapper`);
        const data = {};

        console.log(data);
        this._api.showInfo();
    }

    render() {
        this.host.innerHTML = '';
        return this.host.innerHTML = `<div>
                                        <div></div>
                                      </div>`;
    }

}

export default UserInfo;
