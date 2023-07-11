import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuideVoyageService } from '../Service/guide-voyage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  rechercheBarreForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private gs: GuideVoyageService, private router:Router) {}

  

  destination: string = "";

  recherche() {
    this.router.navigateByUrl("afficher-guide-voyage/" + this.destination);
  }

}
