import { Component, Input } from '@angular/core';
import { ClassModel } from 'Model/ClassModel';
import { HourModel } from 'Model/HourModel';
import { LessonModel } from 'Model/LessonModel';
import { LessonPlan, LessonPlanModel } from 'Model/LessonPlanModel';
import { Teacher, TeacherModel } from 'Model/TeacherModel';
import { lessonPlanService } from '../lessonplan.service';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

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

  myControl = new FormControl();
  options: string[] = ['Ersin Bulut', 'Kamil Bulut', 'Mehmet Demir', 'Ali Can','Ceren Yıldız'];
  filteredOptions: Observable<string[]>;
  constructor(private lessonplanservice :lessonPlanService){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  @Input() lessonplans: LessonPlan[] | undefined;


  addItem(id:any,TeacherName:any,LessonName:any,ClassName:any,HourName:any)
  {
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
