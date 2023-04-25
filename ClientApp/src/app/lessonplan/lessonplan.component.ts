import { Component, Input } from '@angular/core';
import { ClassModel } from 'Model/ClassModel';
import { HourModel } from 'Model/HourModel';
import { LessonModel } from 'Model/LessonModel';
import { LessonPlan, LessonPlanModel } from 'Model/LessonPlanModel';
import { Teacher, TeacherModel } from 'Model/TeacherModel';
import { lessonPlanService } from '../lessonplan.service';

@Component({
  selector: 'lessonplan',
  templateUrl: './lessonplan.component.html',
  styleUrls: ['./lessonplan.component.css']
})
export class LessonplanComponent  {
  teacher=new TeacherModel();
  lesson=new LessonModel();
  class=new ClassModel();
  hour=new HourModel();
  lessonplan=new LessonPlanModel();
  TeacherName1:any;

  onselect(name:any,surname:any){
    console.log(name +" "+ surname);
    this.TeacherName1 = name+" "+surname;

  }

  @Input() lessonplans: LessonPlan[] | undefined;
  constructor(private lessonplanservice :lessonPlanService){}

  addItem(id:any,TeacherName:any,LessonName:any,ClassName:any,HourName:any)
  {
      TeacherName=this.TeacherName1;
      console.log(TeacherName.value);
      console.log(LessonName.value);
      console.log(ClassName.value);
      console.log(HourName.value);
    const t=new LessonPlan(id,TeacherName.value,LessonName.value,ClassName.value,HourName.value);
    this.lessonplanservice.saveLessonPlan(t);
  }

  // onSelectTeacher(Teacher:Teacher){
  //   console.log(Teacher.name + Teacher.surname);
  // }

  getLessonPlan(){
    return this.lessonplanservice.getLessonPlan();
  }

  getTeacher(){
    return this.teacher.teachers;
  }
  getLesson(){
    return this.lesson.lessons;
  }

  getClass(){
    return this.class.class;
  }

  getHour(){
    return this.hour.hours;
  }

  deleteLessonPlan(lessonplan:LessonPlan){
    this.lessonplanservice.deleteLessonPlan(lessonplan);
  }
}
