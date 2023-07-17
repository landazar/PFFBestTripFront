import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from 'src/app/Model/pays.model';
import { Observable } from 'rxjs/internal/Observable';
import { PaysService } from 'src/app/Service/pays.service';
import { VilleService } from 'src/app/Service/ville.service';
import { Ville } from 'src/app/Model/ville.model';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  constructor(private ps:PaysService, private route:Router) {}

  titrePages="Listes des pays";
  listePays!:Observable<Pays[]>;

// Fonction pour charger la liste des pays en faisant appel au service pays
  ngOnInit(): void {
    this.listePays = this.ps.findAllPays();
  }
  // Fonction pour supprimer un pays avec son id en faisant appel au service pays, puis on retourne sur la même page
  supprimer(id:number)
  {
    this.ps.supprimerPays(id).subscribe();
    this.route.navigateByUrl("listePays");
  }

  // Fonction pour récupérer un pays à partir de son id, on redirige ensuite sur modifier pays
  getPaysById(id:number)
  {
    this.route.navigateByUrl("modifierPays/" + id);
  }

}
