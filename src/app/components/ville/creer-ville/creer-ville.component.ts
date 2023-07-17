import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Pays } from 'src/app/Model/pays.model';
import { Ville } from 'src/app/Model/ville.model';
import { PaysService } from 'src/app/Service/pays.service';
import { VilleService } from 'src/app/Service/ville.service';

@Component({
  selector: 'app-creer-ville',
  templateUrl: './creer-ville.component.html',
  styleUrls: ['./creer-ville.component.css']
})
export class CreerVilleComponent implements OnInit {
  villeForm!: FormGroup;
  listePays!:Observable<Pays[]>;

  constructor(private villeService: VilleService, private formBuilder: FormBuilder,private ps: PaysService, private router: Router) {}

  //Fonction pour mettre en place le formulaire réactif 
  ngOnInit(): void {

    //On récupere la liste de tout les pays pour les afficher dans le select partie HTML
    this.listePays = this.ps.findAllPays();

    this.villeForm = this.formBuilder.group(
      {
        nom:[null],
        pays: [null] 
      }
    )
  }

  //Fonction pour save une ville dans la bdd en faisant appel au service ville
  ajouterVille() {
    this.villeService.ajoutVille(this.villeForm.value).subscribe();
    this.router.navigateByUrl('listeVille');
  }
}