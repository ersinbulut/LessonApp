export class ClassModel{
  class:Array<Class> | undefined;

  constructor(){
    this.class=[
      new Class(1,"5.Sınıf"),
      new Class(2,"6.Sınıf"),
      new Class(3,"7.Sınıf"),
      new Class(4,"8.Sınıf"),
    ];
  }
}

export class Class{
  ClassID: number;
  name:string;


  constructor(ClassID:number,name:string){
    this.ClassID=ClassID;
    this.name=name;
  }
}
