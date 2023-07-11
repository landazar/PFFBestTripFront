import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../Model/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  ajoutUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>
  {
    return this.http.post<Utilisateur>("http://localhost:8080/saveUtilisateur", utilisateur);
  }

  supprimerUtilisateur(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteUtilisateur/" + id);
  }

  listeUtilisateur():Observable<Utilisateur[]>
  {
    return this.http.get<Utilisateur[]>("http://localhost:8080/listeUtilisateur");
  }

  getUtilisateurById(id:number):Observable<Utilisateur>
  {
    return this.http.get<Utilisateur>("http://localhost:8080/getUtilisateur/" + id);
  }

  updateUtilisateur(utilisateur:Utilisateur):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierUtilisateur", utilisateur);
  }

  getEmailByEstAbonne():Observable<string[]>
  {
    return this.http.get<string[]>("http://localhost:8080/getEmailByEstAbonne");
  }
}
