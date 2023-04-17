import { Component } from '@angular/core';
import { Class } from 'Model/ClassModel';
import { classService } from '../class.service';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  selectedClass:Class | undefined;

  class:Class[] | undefined;
  constructor(private classservice:classService){ }

  ngOnInit():void{
    this.class=this.classservice.getClass();
  }

  onSelectClass(classes:Class){
    this.selectedClass=classes;
  }

  deleteClass(classes:Class){
    this.classservice.deleteClass(classes);
    this.ngOnInit();
  }
}
