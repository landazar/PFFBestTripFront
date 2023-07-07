import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activite } from '../Model/activite';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  apiURLAjouterActivite = "http://localhost:8080/activite/add"
  apiURLSupprimerActivite = "http://localhost:8080/activite/delete"
  apiURLObtenirActivites = "http://localhost:8080/activite/get"
  apiURLModifierActivite = "http://localhost:8080/activite/update"

  constructor(private http:HttpClient) { }

  ajoutActivite(activite: Activite) {
    console.log(activite);
    return this.http.post(this.apiURLAjouterActivite, activite);
  }

  obtenirActivite(id: number) {
    return this.http.get<Activite>(`${this.apiURLObtenirActivites}/${id}`);
  }

  modifierActivite(activite: Activite) {
    return this.http.put(`${this.apiURLModifierActivite}/${activite.id}`, activite);
  }

  supprimerActivite(id: number) {
    return this.http.delete(`${this.apiURLSupprimerActivite}/${id}`);
  }

  findAllActivites() {
    return this.http.get<Activite[]>(this.apiURLObtenirActivites);
  }
}
