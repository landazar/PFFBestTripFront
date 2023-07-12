import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { VilleService } from '../Service/ville.service';
import { Ville } from '../Model/ville.model';
import { PaysService } from '../Service/pays.service';
import { Pays } from '../Model/pays.model';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(private vs:VilleService, private ps:PaysService, private route:Router) {}

  listeVille!:Observable<Ville[]>;
  listePays!:Observable<Pays[]>;
  pays!:Observable<Pays>
  nomPays!:string;
  id!:number;

  ngOnInit(): void {
    this.listeVille = this.vs.findAllVille();
    this.listePays = this.ps.findAllPays();
    this.listeVille.forEach(element => {
      console.log(element)
    });
    
  }

  supprimer(id:number)
  {
    this.vs.supprimerVille(id).subscribe();
    this.route.navigateByUrl("listeVille");
  }

  AfficherNomPays(id:number){
    this.pays = this.ps.getPaysById(id);
  }

  getVilleById(id:number)
  {
    this.route.navigateByUrl("modifierVille/" + id);
  }

}
