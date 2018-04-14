import { AuthService } from '../services';
import Vuex, { Store } from 'vuex';

export class AuthState  {
    public token: string;
}

export class AuthStore {
    private authService: AuthService;

    constructor () {
        this.authService = new AuthService();
    }
}

