import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ville } from '../Model/ville.model';
import { Observable } from 'rxjs/internal/Observable';
import { PaysService } from './pays.service';
import { Pays } from '../Model/pays.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }

  //fonction pour faire appel au back pour ajouter une ville à la bdd
  ajoutVille(ville:Ville):Observable<Ville>
  {
    return this.http.post<Ville>("http://localhost:8080/creerVille", ville);
  }

  //fonction pour faire appel au back pour supprimer une ville à la bdd
  supprimerVille(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteVille/" + id);
  }

  //fonction pour faire appel au back pour récupérer la liste des villes de la bdd
  findAllVille():Observable<Ville[]>
  {
    return this.http.get<Ville[]>("http://localhost:8080/listeVille");
  }

  //fonction pour faire appel au back pour récupérer une ville de la bdd
  getVilleById(id:number):Observable<Ville>
  {
    return this.http.get<Ville>("http://localhost:8080/getVille/" + id);
  }

  //fonction pour faire appel au back pour modifier une ville dans la bdd
  updateVille(ville:Ville):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierVille", ville);
  }
}

