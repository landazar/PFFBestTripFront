import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../Service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-utilisateur',
  templateUrl: './formulaire-utilisateur.component.html',
  styleUrls: ['./formulaire-utilisateur.component.css']
})
export class FormulaireUtilisateurComponent implements OnInit{

  constructor(private formBuilder:FormBuilder, private us:UtilisateurService, private route:Router) {}

  utilisateurForm!:FormGroup;

  ngOnInit(): void {
    this.utilisateurForm = this.formBuilder.group(
      {
        username:[null, [Validators.required]],
        mdp:[null, [Validators.required]],
        estAbonne:[null, [Validators.required]],
        role:["utilisateur", [Validators.required]],
        email:[null, [Validators.required]],
        nom:[null],
        prenom:[null]
      }
    )
  }

  saveUtilisateur()
  {
    this.us.ajoutUtilisateur(this.utilisateurForm.value).subscribe();
    this.route.navigateByUrl("utilisateur");
  }



}
