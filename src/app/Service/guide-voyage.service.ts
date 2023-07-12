import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuideVoyage } from '../Model/guide-voyage';
import { Activite } from '../Model/activite';
import { Utilisateur } from '../Model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class GuideVoyageService {
  private apiURLListeGuideVoyage = 'http://localhost:8080/listeGuideVoyage';
  private apiURLSaveGuideVoyage = 'http://localhost:8080/saveGuideVoyage';
  private apiURLModifierGuideVoyage = 'http://localhost:8080/modifierGuideVoyage';
  private apiURLDeleteGuideVoyage = 'http://localhost:8080/deleteGuideVoyage';
  private apiURLgetGuideVoyageById = 'http://localhost:8080/getGuideVoyageById';
  private apiURLsaveActivite = 'http://localhost:8080/activite/add';
  private apiURLdoesGuideExist = 'http://localhost:8080/doesGuideExist';

  constructor(private http: HttpClient) { }


  getListeGuideVoyage(nom: string): Observable<GuideVoyage[]> {
    const url = `${this.apiURLListeGuideVoyage}/${nom}`;
    return this.http.get<GuideVoyage[]>(url);
  }

  saveGuideVoyage(guideVoyage: GuideVoyage): Observable<GuideVoyage> {
    console.log("guide:" + guideVoyage)
    return this.http.post<GuideVoyage>(this.apiURLSaveGuideVoyage, guideVoyage);
  }

  saveActivite(activite: Activite): Observable<Activite> {
    return this.http.post<Activite>(this.apiURLsaveActivite, activite);
  }

  modifierGuideVoyage(guideVoyage: GuideVoyage): Observable<boolean> {
    return this.http.put<boolean>(this.apiURLModifierGuideVoyage, guideVoyage);
  }

  deleteGuideVoyage(id: number): Observable<boolean> {
    const url = `${this.apiURLDeleteGuideVoyage}/${id}`;
    return this.http.delete<boolean>(url);
  }

  getGuideVoyageById(id: number): Observable<GuideVoyage> {
    const url = `${this.apiURLgetGuideVoyageById}/${id}`;
    return this.http.get<GuideVoyage>(url);
  }

  doesGuideExist(nom: string): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8080/doesGuideExist/" + nom);
  }
}
