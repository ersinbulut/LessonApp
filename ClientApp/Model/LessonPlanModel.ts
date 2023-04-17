export class LessonPlanModel{
  lessonplans:Array<LessonPlan> | undefined;

  constructor(){
    this.lessonplans=[
      new LessonPlan(1,"Ersin Bulut","Matematik","8.Sınıf","2 Ders"),
      new LessonPlan(2,"Kamil Bulut","Fizik","8.Sınıf","2 Ders"),
    ];
  }
}

export class LessonPlan{
  id:number;
  TeacherName:string;
  LessonName: string;
  ClassName:string;
  HourName:string;



  constructor(id:number,TeacherName:string,LessonName:string,ClassName:string,HourName:string){
    this.id=id;
    this.LessonName=LessonName;
    this.TeacherName=TeacherName;
    this.ClassName=ClassName;
    this.HourName=HourName;
  }
}
