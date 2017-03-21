import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

import { Course } from '../../../shared/components/models/course';

@Component({
    selector: 'course',
    styleUrls: ['./course.component.css'],
    templateUrl: './course.component.html'
})
export class CourseComponent {
    @Input() course: Course;
    @Input('master') masterName: string;

    @Output() onDelete = new EventEmitter<number>();

    deleteCourse(id: number) {
        this.onDelete.emit(id);
    }
}
