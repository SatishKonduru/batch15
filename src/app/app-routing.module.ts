import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseNameComponent } from './components/course-name/course-name.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { IfComponent } from './components/if/if.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path:'', //localhost:4200
    redirectTo: 'Testing', //localhost:4200/Testing
    pathMatch: 'full'
  },
  {
    path:'Testing',
    component: TestComponent
  },
 
  {
    path: 'myIfCondition',
    component: IfComponent
  },
  {
    path: 'courseName',
    component: CourseNameComponent
  },
  
  {
    path: 'courseDetails',
    component: CourseDetailsComponent
  },
  {
    path: '**',
    component: FileNotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
