import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { VilleService } from 'src/app/Service/ville.service';
import { Ville } from 'src/app/Model/ville.model';
import { PaysService } from 'src/app/Service/pays.service';
import { Pays } from 'src/app/Model/pays.model';

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

  // Fonction pour charger la liste des pays et ville correspondant au pays en faisant appel au service ville et pays
  ngOnInit(): void {
    this.listeVille = this.vs.findAllVille();
    this.listePays = this.ps.findAllPays();
    this.listeVille.forEach(element => {
      console.log(element)
    });
    
  }

  //Fonction pour supprimer une ville avec son id en faisant appel au service ville, puis on retourne sur la même page 
  supprimer(id:number)
  {
    this.vs.supprimerVille(id).subscribe();
    this.route.navigateByUrl("listeVille");
  }


  

  // Fonction pour récupérer une ville à partir de son id, on redirige ensuite sur modifier ville
  getVilleById(id:number)
  {
    this.route.navigateByUrl("modifierVille/" + id);
  }

}
