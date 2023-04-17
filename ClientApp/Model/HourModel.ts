export class HourModel{
  hours:Array<Hour> | undefined;

  constructor(){
    this.hours=[
      new Hour(1,"1 Ders"),
      new Hour(2,"2 Ders"),
      new Hour(3,"3 Ders"),
      new Hour(4,"4 Ders"),
    ];
  }
}

export class Hour{
  HourID: number;
  name:string;


  constructor(HourID:number,name:string){
    this.HourID=HourID;
    this.name=name;
  }
}
