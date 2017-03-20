import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../../../app.service';

@Component({
    selector: 'home',  // <home></home>
    templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
    public localState = { value: '' };
    constructor(
        public appState: AppState
    ) {}

    public ngOnInit() {
        console.log('courses');
    }
}
