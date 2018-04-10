import Component from '../framework/Component';

class UserInfo extends Component{
    constructor() {
        super();
        this.host = document.createElement('div');
        this.host.classList.add('user-info-wrapper');
        }

    render(data) {
        this.host.innerHTML = '';
        console.log(data);
        return this.host.innerHTML = `<div>
                                        <div class="created_at">${data.created_at}</div>
                                        <div class="email">${data.email}</div>
                                        <div class="last_login">${data.last_login}</div>
                                        <div class="username">${data.username}</div>
                                        <div class="uuid">${data.uuid}</div>
                                      </div>`;
    }

}

export default UserInfo;
