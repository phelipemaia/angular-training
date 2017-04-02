import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    login() : any {
        let user = {
            username: 'Phelipe',
            toke: 'tokenTest'
        };
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }

    logout() {
        localStorage.removeItem('user');
    }

    isAuthenticated() : boolean {
        let user = localStorage.getItem('user');
        if (user) {
            return !!JSON.parse(user).token;
        }
        return false;

    }

    getUserInfo() : any {
        let user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }
}