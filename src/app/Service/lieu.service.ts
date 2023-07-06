import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lieu } from '../Model/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuService {
  apiURLAjouterLieu = "http://localhost:8080/lieu/add"
  apiURLSupprimerLieu = "http://localhost:8080/lieu/delete"
  apiURLObtenirLieus = "http://localhost:8080/lieu/get"
  apiURLModifierLieu = "http://localhost:8080/lieu/update"

  constructor(private http:HttpClient) { }

  ajoutLieu(lieu: Lieu) {
    console.log(lieu);
    return this.http.post(this.apiURLAjouterLieu, lieu);
  }

  obtenirLieu(id: number) {
    return this.http.get<Lieu>(`${this.apiURLObtenirLieus}/${id}`);
  }
  /*
  modifierLieu(lieu: Lieu) {
    return this.http.put(`${this.apiURLModifierLieu}/${lieu.id}`, lieu);
  }
  */
  supprimerLieu(id: number) {
    return this.http.delete(`${this.apiURLSupprimerLieu}/${id}`);
  }

  findAllLieus() {
    return this.http.get<Lieu[]>(this.apiURLObtenirLieus);
  }
}
