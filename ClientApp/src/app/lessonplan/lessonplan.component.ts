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
export class LessonplanComponent {
  teacher=new TeacherModel();
  lesson=new LessonModel();
  class=new ClassModel();
  hour=new HourModel();
  lessonplan=new LessonPlanModel();

  // addItem(Teacher:any,Lesson:any,Class:any,Hour:any){
  //   console.log(Teacher.value);
  //   console.log(Lesson.value);
  //   console.log(Class.value);
  //   console.log(Hour.value);
  // }

  @Input() lessonplans: LessonPlan[] | undefined;
  constructor(private lessonplanservice :lessonPlanService){}

  addItem(id:any,teacher:any,lesson:any,classes:any,hour:any)
  {
      console.log(teacher.value);
      console.log(lesson.value);
      console.log(classes.value);
      console.log(hour.value);
    const t=new LessonPlan(0,teacher,lesson,classes,hour);
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
}
