import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from '../Model/pays.model';
import { Observable } from 'rxjs/internal/Observable';
import { PaysService } from '../Service/pays.service';
import { VilleService } from '../Service/ville.service';
import { Ville } from '../Model/ville.model';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  constructor(private ps:PaysService,/* private vs:VilleService, */private route:Router) {}

  listePays!:Observable<Pays[]>;
  // listeVillePays!:Observable<Ville[]>;

  ngOnInit(): void {
    this.listePays = this.ps.findAllPays();
  }

  supprimer(id:number)
  {
    this.ps.supprimerPays(id).subscribe();
    this.route.navigateByUrl("listePays");
  }

  getPaysById(id:number)
  {
    this.route.navigateByUrl("modifierPays/" + id);
  }

}
