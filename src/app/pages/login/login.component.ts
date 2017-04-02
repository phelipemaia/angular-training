import {
    Component
} from '@angular/core';

import {AuthService} from '../../shared/components/services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    private authServices;

    constructor(authServices: AuthService) {
        this.authServices = authServices;
    }

    enter() {
        this.authServices.login();
        location.reload();
    }
}
