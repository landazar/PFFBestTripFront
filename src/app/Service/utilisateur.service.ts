import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../Model/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  //fonction pour faire appel au back pour ajouter un utilisateur à la bdd
  ajoutUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>
  {
    return this.http.post<Utilisateur>("http://localhost:8080/saveUtilisateur", utilisateur);
  }

  //fonction pour faire appel au back pour supprimer un utilisateur de la bdd
  supprimerUtilisateur(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteUtilisateur/" + id);
  }

  //fonction pour faire appel au back pour récupérer la liste des utilisateurs dans la bdd
  listeUtilisateur():Observable<Utilisateur[]>
  {
    return this.http.get<Utilisateur[]>("http://localhost:8080/listeUtilisateur");
  }

  //fonction pour faire appel au back pour récupérer un utilisateur de la bdd par son id
  getUtilisateurById(id:number):Observable<Utilisateur>
  {
    return this.http.get<Utilisateur>("http://localhost:8080/getUtilisateur/" + id);
  }

  //fonction pour faire appel au back pour modifier un utilisateur de la bdd
  updateUtilisateur(utilisateur:Utilisateur):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierUtilisateur", utilisateur);
  }

  //fonction pour faire appel au back pour récupérer la liste des email des utilisateurs de la bdd qui sont à true dans l'attribut "estAbonne"
  getEmailByEstAbonne():Observable<string[]>
  {
    this.http.get<string[]>("http://localhost:8080/getEmailByEstAbonne").subscribe(data => {console.log("data :" + data)});
    return this.http.get<string[]>("http://localhost:8080/getEmailByEstAbonne");
  }

  //fonction pour faire appel au back pour récuperer un utilisateur de la bdd par son username
  getUtilisateurByUsername(username:string):Observable<Utilisateur>
  {
    const params = new HttpParams().set('username', username);
    return this.http.get<Utilisateur>("http://localhost:8080/getUtilisateurByUsername", {params})
  }
}
