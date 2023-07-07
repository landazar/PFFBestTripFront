import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pays } from 'src/app/Model/pays.model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http:HttpClient) { }

  ajoutPays(pays:Pays):Observable<Pays>
  {
    return this.http.post<Pays>("http://localhost:8080/savePays", pays);
  }

  supprimerPays(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>("http://localhost:8080/deletePays/" + id);
  }

  findAllPays():Observable<Pays[]>
  {
    return this.http.get<Pays[]>("http://localhost:8080/listePays");
  }

  getPaysById(id:number):Observable<Pays>
  {
    return this.http.get<Pays>("http://localhost:8080/getPays/" + id);
  }

  updatePays(pays:Pays):Observable<boolean>
  {
    return this.http.put<boolean>("http://localhost:8080/modifierPays", pays);
  }
}
