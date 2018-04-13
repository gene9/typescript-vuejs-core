import { AuthService } from '../services';

export class AuthStore {
    private authService: AuthService;
    private token: string;

    constructor () {
        this.authService = new AuthService();
    }

    get isLoggedIn() {
        if(typeof this.token != 'undefined' && this.token){
            return true;
        }
        return false;
    }

    setToken(token: string) {
        this.token = token;
    }
}
