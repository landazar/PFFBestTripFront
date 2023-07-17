import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pays } from 'src/app/Model/pays.model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http:HttpClient) { }

  //fonction pour faire appel au back pour ajouter un pays à la bdd
  ajoutPays(pays:Pays):Observable<Pays>
  {
    return this.http.post<Pays>("http://localhost:8080/creerPays", pays);
  }

  //fonction pour faire appel au back pour supprimer un pays de la bdd
  supprimerPays(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deletePays/" + id);
  }

  //fonction pour faire appel au back pour récupérer la liste des pays dans la bdd
  findAllPays():Observable<Pays[]>
  {
    return this.http.get<Pays[]>("http://localhost:8080/listePays");
  }
  
  //fonction pour faire appel au back pour récupérer un pays de la bdd par son id
  getPaysById(id:number):Observable<Pays>
  {
    return this.http.get<Pays>("http://localhost:8080/getPays/" + id);
  }

  //fonction pour faire appel au back pour modifier un pays de la bdd
  updatePays(pays:Pays):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierPays", pays);
  }


   // findAllVillePays():Observable<Pays[]>
  // {
  //   return this.http.get<Pays[]>("http://localhost:8080/listeVillePays");
  // }
}
