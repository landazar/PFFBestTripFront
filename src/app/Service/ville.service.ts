import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ville } from '../Model/ville.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private http:HttpClient) { }

  ajoutVille(ville:Ville):Observable<Ville>
  {
    return this.http.post<Ville>("http://localhost:8080/creerVille", ville);
  }

  supprimerVille(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deleteVille/" + id);
  }

  findAllVille():Observable<Ville[]>
  {
    return this.http.get<Ville[]>("http://localhost:8080/listeVille");
  }

  getVilleById(id:number):Observable<Ville>
  {
    return this.http.get<Ville>("http://localhost:8080/getVille/" + id);
  }

  updateVille(ville:Ville):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierVille", ville);
  }
}

