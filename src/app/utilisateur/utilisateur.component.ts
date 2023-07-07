import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/utilisateur.model';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  constructor(private us:UtilisateurService, private route:Router) {}

  listeUtilisateur!:Observable<Utilisateur[]>;

  ngOnInit(): void {
    this.listeUtilisateur = this.us.listeUtilisateur();
  }

  supprimer(id:number)
  {
    this.us.supprimerUtilisateur(id).subscribe();
    this.route.navigateByUrl("Utilisateur");
  }

  getUtilisateurById(id:number)
  {
    this.route.navigateByUrl("updateUtilisateur/" + id);
  }

}
