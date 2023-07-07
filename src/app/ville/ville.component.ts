import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { VilleService } from '../Service/ville.service';
import { Ville } from '../Model/ville.model';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(private vs:VilleService, private route:Router) {}

  listeVille!:Observable<Ville[]>;

  ngOnInit(): void {
    this.listeVille = this.vs.findAllVille();
  }

  supprimer(id:number)
  {
    this.vs.supprimerVille(id).subscribe();
    this.route.navigateByUrl("ville");
  }

  getVilleById(id:number)
  {
    this.route.navigateByUrl("updateVille/" + id);
  }

}
