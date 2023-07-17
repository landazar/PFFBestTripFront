import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit{

  id!:number;
  utilisateurForm?:FormGroup;

  constructor(private us:UtilisateurService, private formBuilder:FormBuilder, private ar:ActivatedRoute, private route:Router) {
    this.id = ar.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.us.getUtilisateurById(this.id).subscribe(data => {
      this.utilisateurForm=this.formBuilder.group(
        {
          id:[data.id],
          username:[data.username, [Validators.required]],
          mdp:[data.mdp, [Validators.required]],
          estAbonne:[data.estAbonne, [Validators.required]],
          role:[data.role, [Validators.required]],
          email:[data.email, [Validators.required]],
          nom:[data.nom],
          prenom:[data.prenom]
        }
      )
    })
  }

  updateUtilisateur()
  {
    this.us.updateUtilisateur(this.utilisateurForm?.value).subscribe();
    this.route.navigateByUrl("utilisateur");
  }

}
