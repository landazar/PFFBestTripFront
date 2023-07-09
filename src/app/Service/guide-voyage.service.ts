import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuideVoyage } from '../Model/guide-voyage';

@Injectable({
  providedIn: 'root'
})
export class GuideVoyageService {
  private apiURLListeGuideVoyage = 'http://localhost:8080/listeGuideVoyage';
  private apiURLSaveGuideVoyage = 'http://localhost:8080/saveGuideVoyage';
  private apiURLModifierGuideVoyage = 'http://localhost:8080/modifierGuideVoyage';
  private apiURLDeleteGuideVoyage = 'http://localhost:8080/deleteGuideVoyage';
  private apiURLgetGuideVoyageById = 'http://localhost:8080/getGuideVoyageById';

  constructor(private http: HttpClient) { }

  getListeGuideVoyage(): Observable<GuideVoyage[]> {
    return this.http.get<GuideVoyage[]>(this.apiURLListeGuideVoyage);
  }

  saveGuideVoyage(guideVoyage: GuideVoyage): Observable<GuideVoyage> {
    return this.http.post<GuideVoyage>(this.apiURLSaveGuideVoyage, guideVoyage);
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
}
