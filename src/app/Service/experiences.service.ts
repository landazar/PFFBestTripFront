import { Injectable } from '@angular/core';
import { Experiences } from '../Model/experiences';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private http:HttpClient) { }

  saveExperiences(experiences:Experiences):Observable<Experiences>
  {
    return this.http.post<Experiences>("http://localhost:8080/saveExperiences", experiences);
  }

  listeExperiences():Observable<Experiences[]> {
    return this.http.get<Experiences[]>("http://localhost:8080/listeExperiences");
  }

  updateExperiencest(experiences:Experiences):Observable<boolean> {
    return this.http.put<boolean>("http://localhost:4200/updateExperiences", experiences);
  }

  deleteExperiences(idExperience:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteExperiences/" + idExperience);
  }

  
}
