import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
//import { COURSES } from '../../shared/models/course';
import { CoursesService } from './courses.service'

@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    templateUrl: './courses.component.html',
    providers: [CoursesService]
})
export class CoursesComponent {
    public valueToFind = '';
    public courses;

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    public findCourse(value: string) {
        console.log('find', value);
        this.valueToFind = '';
    }

    onDelete(id: number) {
        console.log("Delete " + id);
    }
}
