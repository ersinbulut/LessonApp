export class LessonModel{
  lessons:Array<Lesson> | undefined;

  constructor(){
    this.lessons=[
      new Lesson(1,"Matematik"),
      new Lesson(2,"Fizik"),
      new Lesson(3,"Kimya"),
      new Lesson(4,"Biyoloji"),
      new Lesson(5,"Tarih"),
      new Lesson(6,"Türkçe"),
    ];
  }
}

export class Lesson{
  LessonID: number;
  name:string;


  constructor(LessonID:number,name:string){
    this.LessonID=LessonID;
    this.name=name;
  }
}
