import axios from 'axios';

export class AuthService {
    login(username: string, password: string) {
        const data = {
            'username': username,
            'password': password
        };

        axios.post('//localhost:11157/api/user/login', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
