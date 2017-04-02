import { Injectable } from '@angular/core';
import { iCourse } from '../../shared/models/course';

@Injectable()
export class CoursesService {
    private courses = [
        { id: 1,
            title: "First",
            description: "Lorem Ipsu",
            duration: 4432,
            startDate: new Date()},
        { id: 2,
            title: "Second",
            description: "Lorem Ipsum 2",
            duration: 345,
            startDate: new Date()}
    ];
    getCourses() : any[] {
        return this.courses;
    }

    createCourse() : iCourse {

        return null;
    }

    getCourseById(id: number) : iCourse {

        return null;
    }

    updateCourse(id: number) : iCourse {

        return null;
    }

    deleteCourse(id: number) : any[] {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id === id) {
                this.courses.splice(i, 1);
            }
        }
        return this.courses;
    }
}