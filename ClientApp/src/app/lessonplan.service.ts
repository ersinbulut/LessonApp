import { Injectable } from "@angular/core";
import { Lesson, LessonModel } from "Model/LessonModel";
import { LessonPlan, LessonPlanModel } from "Model/LessonPlanModel";
@Injectable({
  providedIn: 'root'
})
export class lessonPlanService{
  model = new LessonPlanModel();

  constructor(){}

  getLessonPlan(){
    return this.model.lessonplans;
  }

  getLessonPlanByID(id:number){
    return this.model.lessonplans?.find(i=>i.id==id);
  }
  saveLessonPlan(lessonplans:LessonPlan)
  {
    if(lessonplans.id==0)
    {
      lessonplans.id+=3;
      this.model.lessonplans?.push(lessonplans);
    }
    else{
      const p = this.getLessonPlanByID(lessonplans.id);
      // p.name=teacher.name;
      // p.surname=teacher.surname;
      // p?.isActive=teacher.isActive;
    }
  }

  deleteLessonPlan(lessonplans:LessonPlan){
    this.model.lessonplans=this.model.lessonplans?.filter(p=>p!==lessonplans);
  }
}
