import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../../app.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
    public valueToFind = '';
    constructor(
        public appState: AppState
    ) {}

    public ngOnInit() {
        console.log('courses');
    }

    public findCourse(value: string) {
        console.log('find', value);
        this.valueToFind = '';
    }
}
