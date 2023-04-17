import { Component } from '@angular/core';
import { Hour } from 'Model/HourModel';
import { hourService } from '../hour.service';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent {
  selectedHours:Hour | undefined;

  hours:Hour[] | undefined;
  constructor(private hourservice:hourService){ }

  ngOnInit():void{
    this.hours=this.hourservice.getHour();
  }

  onSelectClass(hours:Hour){
    this.selectedHours=hours;
  }

  deleteClass(hours:Hour){
    this.hourservice.deleteHour(hours);
    this.ngOnInit();
  }
}
