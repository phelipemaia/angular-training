import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { COURSES } from '../../shared/components/models/course';

@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    public valueToFind = '';
    courses = COURSES;

    public findCourse(value: string) {
        console.log('find', value);
        this.valueToFind = '';
    }

    onDelete(id: number) {
        console.log("Delete " + id);
    }
}
