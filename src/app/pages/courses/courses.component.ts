import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
//import { COURSES } from '../../shared/models/course';
import { CoursesService } from './courses.service';
import { AuthService } from '../../shared/components/services/auth.service';

@Component({
    selector: 'courses',
    styleUrls: ['./courses.component.css'],
    templateUrl: './courses.component.html',
    providers: [CoursesService, AuthService]
})
export class CoursesComponent {
    public valueToFind = '';
    public courses;
    public isAuthenticated = false;

    constructor(coursesService: CoursesService, authServices: AuthService) {
        this.courses = coursesService.getCourses();
        this.isAuthenticated = authServices.isAuthenticated();
        console.log(this.isAuthenticated)
    }

    public findCourse(value: string) {
        console.log('find', value);
        this.valueToFind = '';
    }

    onDelete(id: number) {
        console.log("Delete " + id);
    }
}
