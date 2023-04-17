import { Component } from '@angular/core';
import { Teacher, TeacherModel } from 'Model/TeacherModel';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  title = 'Öğretmenler';
  selectedTeacher:Teacher | undefined;

  teachers:Teacher[] | undefined;
  constructor(private teacherService:TeacherService){ }

  ngOnInit():void{
    this.getTeacher();
    // this.teachers=this.teacherService.getTeachers();
  }

  getTeacher(){
     this.teacherService.getTeachers().subscribe(teachers=>{
      this.teachers=teachers
    });
  }

  onSelectTeacher(teacher:Teacher){
    this.selectedTeacher=teacher;
  }

  deleteTeacher(teacher:Teacher){
    this.teacherService.deleteTeacher(teacher).subscribe(p=>{
      this.teachers?.splice(this.teachers.findIndex(p=>p.Teacherid==teacher.Teacherid),1)
    });
    this.ngOnInit();
  }


}
