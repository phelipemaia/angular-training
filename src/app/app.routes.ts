import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/courses/course/course.component';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: CoursesComponent },
  { path: 'courses',  component: CoursesComponent },
  { path: 'course',  component: CourseComponent },
  { path: '**',    component: NoContentComponent },
];
