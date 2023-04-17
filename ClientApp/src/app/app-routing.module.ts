import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { HourComponent } from './hour/hour.component';
import { LessonplanComponent } from './lessonplan/lessonplan.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:'teachers',component:TeachersComponent},
  {path:'',redirectTo:'teachers',pathMatch:'full'},

  {path:'lessons',component:LessonsComponent},
  {path:'',redirectTo:'lessons',pathMatch:'full'},

  {path:'lessonplan',component:LessonplanComponent},
  {path:'',redirectTo:'lessonplan',pathMatch:'full'},

  {path:'class',component:ClassComponent},
  {path:'',redirectTo:'class',pathMatch:'full'},

  {path:'hour',component:HourComponent},
  {path:'',redirectTo:'hour',pathMatch:'full'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
