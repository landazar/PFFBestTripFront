import { Injectable } from '@angular/core';
import { Experiences } from '../Model/experiences';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {


  constructor(private http:HttpClient) { }

  saveExperiences(experiences:Experiences, username:string):Observable<Experiences>
  {
    const params = new HttpParams().set('username', username);
    return this.http.post<Experiences>("http://localhost:8080/saveExperiences", experiences, {params});
  }


  listeExperiences(type: string) {
    return this.http.get<Experiences[]>("http://localhost:8080/listeExperiences/" + type);
  }


  updateExperiences(experiences:Experiences, username:string):Observable<boolean> {
    const params = new HttpParams().set('username', username);
    console.log('update');
    console.log(experiences);
    return this.http.put<boolean>("http://localhost:8080/updateExperiences", experiences, {params});
  }

  deleteExperiences(idExperience:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteExperiences/" + idExperience);
  }

  getExperiencesById(idExperience:number):Observable<Experiences> {
    return this.http.get<Experiences>("http://localhost:8080/getExperiencesById/" + idExperience);
  }

  getUsernameById(idExperience:number):Observable<string>
  {
    return this.http.get("http://localhost:8080/getUsernameById/" + idExperience, {responseType:"text"});
  }

  doesExperienceExist(type: string): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8080/doesExperienceExist/" + type);
  }
  
  approuverExperiences(idExperience:number) {
    return this.http.get<boolean>("http://localhost:8080/approuverExperiences/" + idExperience);
  }
}
