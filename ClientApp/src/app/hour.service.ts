import { Injectable } from "@angular/core";
import { Hour, HourModel } from "Model/HourModel";

@Injectable({
  providedIn: 'root'
})
export class hourService{
  model = new HourModel();

  constructor(){}

  getHour(){
    return this.model.hours;
  }

  getHourByID(id:number){
    return this.model.hours?.find(i=>i.HourID==id);
  }
  saveHour(hour:Hour)
  {
    if(hour.HourID==0)
    {
      this.model.hours?.push(hour);
    }
    else{
      const p = this.getHourByID(hour.HourID);
      // p.name=teacher.name;
      // p.surname=teacher.surname;
      // p?.isActive=teacher.isActive;
    }
  }

  deleteHour(hour:Hour){
    this.model.hours=this.model.hours?.filter(p=>p!==hour);
  }
}
