import { Component, Input } from '@angular/core';
import { Teacher } from 'Model/TeacherModel';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {

  @Input() teachers: Teacher[] | undefined;
  constructor(private teacherService :TeacherService){}

  addTeacher(name:string,surname:string,isActive:boolean)
  {
    const t=new Teacher(0,name,surname,isActive);
    this.teacherService.addTeacher(t).subscribe(teacher=>
       this.teachers?.push(teacher));
  }
}
