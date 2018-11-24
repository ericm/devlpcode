// TODO: this will query api for user data
import { Login, UserStatus } from '../../../interfaces';

export default class Users {

    public user: UserStatus = {loggedin: false};

    constructor(token?: string, login?: Login) {
        
        if (token != null) {

            fetch('http://localhost:8080/acc/' + token +'/test/')
            .then(res => res.json())
            .then(result => {

                this.user = {loggedin: true, username: result.user, token} 

            })

        } else {
            this.user = {loggedin: false};
        }
        
    }

}