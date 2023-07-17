import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuideVoyageService } from '../Service/guide-voyage.service';
import { Router } from '@angular/router';
import { ExperiencesService } from '../Service/experiences.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  rechercheBarreForm!:FormGroup

  destination: string = "";
  type: string = "";

  constructor(private formBuilder:FormBuilder, private gs: GuideVoyageService, private router:Router, private es: ExperiencesService) {}

  

  

  recherche() {
    this.router.navigateByUrl("afficher-guide-voyage/" + this.destination);
  }

  plage() {
    this.type = "Plage";
  }

  ski() {
    this.type = "Ski"
  }

  randonnee() {
    this.type = "Randonnée"
  }

  rechercheDestination() {
    this.router.navigateByUrl("listeExperiences/" + this.type);
  }

}
