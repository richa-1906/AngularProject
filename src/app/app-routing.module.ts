import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CreateComponent } from './create/create.component';
import { Course } from './Model/Course';




const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/:id', component: CreateComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }