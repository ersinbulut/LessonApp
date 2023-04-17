import { Component } from '@angular/core';
import { Class, ClassModel } from 'Model/ClassModel';
import { HourModel } from 'Model/HourModel';
import { Lesson, LessonModel } from 'Model/LessonModel';
import { lessonService } from '../lesson.service';


@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {
  title="Dersler";

  selectedLesson:Lesson | undefined;

  lesson:Lesson[] | undefined;
  constructor(private lessonService:lessonService){ }

  ngOnInit():void{
    this.lesson=this.lessonService.getLesson();
  }

  onSelectLesson(lesson:Lesson){
    this.selectedLesson=lesson;
  }

  deleteLesson(lesson:Lesson){
    this.lessonService.deleteLesson(lesson);
    this.ngOnInit();
  }
}
