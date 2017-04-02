import {
    Component
} from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
    selector: 'course-header',
    styleUrls: [
        './template.css'
    ],
    templateUrl: './header.html',
    providers: [AuthService]
})

export class HeaderComponent {
    private authServices;
    constructor(authServices: AuthService) {
        this.authServices = authServices;
    }
    logout() {
        this.authServices.logout();
        location.reload();
    }
}
