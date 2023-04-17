import { Injectable } from "@angular/core";
import { Lesson, LessonModel } from "Model/LessonModel";
@Injectable({
  providedIn: 'root'
})
export class lessonService{
  model = new LessonModel();

  constructor(){}

  getLesson(){
    return this.model.lessons;
  }

  getLessonByID(id:number){
    return this.model.lessons?.find(i=>i.LessonID==id);
  }
  saveLesson(lessons:Lesson)
  {
    if(lessons.LessonID==0)
    {
      this.model.lessons?.push(lessons);
    }
    else{
      const p = this.getLessonByID(lessons.LessonID);
      // p.name=teacher.name;
      // p.surname=teacher.surname;
      // p?.isActive=teacher.isActive;
    }
  }

  deleteLesson(lessons:Lesson){
    this.model.lessons=this.model.lessons?.filter(p=>p!==lessons);
  }
}
