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
    constructor(
    ) {}
}
