export class TeacherModel{
  push(Teacher: Teacher): any {
    throw new Error('Method not implemented.');
  }
  teachers:Array<Teacher> | undefined;

  constructor(){
    this.teachers=[
      new Teacher(1,"Ersin","Bulut",true),
      new Teacher(2,"Kamil","Bulut",false),
      new Teacher(3,"Ekrem","Bulut",true),
      new Teacher(4,"Ahmet","Bulut",false),
      new Teacher(5,"Mehmet","Bulut",true),

    ];
  }
}

export class Teacher{
  Teacherid: number;
  name:string;
  surname:string;
  isActive:boolean;

  constructor(Teacherid:number,name:string,surname:string,isActive:boolean){
    this.Teacherid=Teacherid;
    this.name=name;
    this.surname=surname;
    this.isActive=isActive;
  }
}

