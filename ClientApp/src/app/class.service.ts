import { Injectable } from "@angular/core";
import { Class, ClassModel } from "Model/ClassModel";

@Injectable({
  providedIn: 'root'
})
export class classService{
  model = new ClassModel();

  constructor(){}

  getClass(){
    return this.model.class;
  }

  getClassByID(id:number){
    return this.model.class?.find(i=>i.ClassID==id);
  }
  saveClass(Class:Class)
  {
    if(Class.ClassID==0)
    {
      this.model.class?.push(Class);
    }
    else{
      const p = this.getClassByID(Class.ClassID);
      // p.name=teacher.name;
      // p.surname=teacher.surname;
      // p?.isActive=teacher.isActive;
    }
  }

  deleteClass(classes:Class){
    this.model.class=this.model.class?.filter(p=>p!==classes);
  }
}
