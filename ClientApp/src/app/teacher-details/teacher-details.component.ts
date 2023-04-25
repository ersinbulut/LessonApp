import { Component, Input } from '@angular/core';
import { Teacher } from 'Model/TeacherModel';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent {

    @Input() teacher:Teacher | undefined;
    @Input() teachers: Teacher[] = [];

    constructor(private teacherService :TeacherService){}

  UpdateTeacher(id:string,name:string,surname:string,isActive:boolean)
  {
    const t=new Teacher(parseInt(id),name,surname,isActive);
    this.teacherService.updateTeacher(t)
    .subscribe(result=>{
      this.teachers.splice(this.teachers.findIndex(x=>x.teacherid == t.teacherid),1,t);
    });

  }
}
