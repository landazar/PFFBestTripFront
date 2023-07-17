import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  constructor(private us:UtilisateurService, private route:Router) {}

  listeUtilisateur!:Observable<Utilisateur[]>;

  // Fonction pour charger la liste des utilisateurs en faisant appel au service utilisateur
  ngOnInit(): void {
    this.listeUtilisateur = this.us.listeUtilisateur();
  }

  //Fonction pour supprimer un utilisateur avec son id en faisant appel au service utilisateur, puis on retourne sur la même page 
  supprimer(id:number)
  {
    this.us.supprimerUtilisateur(id).subscribe();
    this.route.navigateByUrl("Utilisateur");
  }

  // Fonction pour récupérer un utilisateur à partir de son id, on redirige ensuite sur update utilisateur
  getUtilisateurById(id:number)
  {
    this.route.navigateByUrl("updateUtilisateur/" + id);
  }

}
