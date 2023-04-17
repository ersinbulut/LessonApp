import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher, TeacherModel } from 'Model/TeacherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:5254/";

  model = new TeacherModel();

  // constructor(){}

  getTeachers():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.baseUrl+'api/teacher');
  }

  addTeacher(teacher:Teacher):Observable<Teacher>
  {
    return this.http.post<Teacher>(this.baseUrl+'api/teacher/',teacher);
  }

  updateTeacher(teacher:Teacher){
    return this.http.put<Teacher>(this.baseUrl+'api/teacher/'+teacher.Teacherid,teacher);
  }

  deleteTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.delete<Teacher>(this.baseUrl+'api/teacher/'+teacher.Teacherid)
  }

  // getTeachers(){
  //   return this.model.teachers;
  // }

  getTeacherByID(id:number){
    return this.model.teachers?.find(i=>i.Teacherid==id);
  }
  saveTeacher(teacher:Teacher)
  {
    if(teacher.Teacherid==0)
    {
      this.model.teachers?.push(teacher);
    }
    else{
      const p = this.getTeacherByID(teacher.Teacherid);
      // p.name=teacher.name;
      // p.surname=teacher.surname;
      // p?.isActive=teacher.isActive;
    }
  }

  // deleteTeacher(teacher:Teacher){
  //   this.model.teachers=this.model.teachers?.filter(p=>p!==teacher);
  // }







}
