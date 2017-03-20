import {
    Component
} from '@angular/core';

@Component({
    selector: 'course-header',
    styleUrls: [
        './template.css'
    ],
    template: `<div class="header">
        <div>
            <img class="logo" src="../../../assets/img/angular-logo.png"/>
            Courses
            <div class="logoff-container">
                <p>user login</p>
                <p>logoff</p>
            </div>
        </div>
    </div>`
})

export class HeaderComponent {
    constructor(
    ) {}
}
