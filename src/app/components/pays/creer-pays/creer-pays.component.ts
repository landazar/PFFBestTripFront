import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pays } from 'src/app/Model/pays.model';
import { PaysService } from 'src/app/Service/pays.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-pays',
  templateUrl: './creer-pays.component.html',
  styleUrls: ['./creer-pays.component.css']
})
export class CreerPaysComponent implements OnInit {
  paysForm!: FormGroup;

  constructor(private paysService: PaysService, private formBuilder: FormBuilder,private router: Router) {}
 // Mise en place du formulaire reactif
  ngOnInit(): void {

    this.paysForm = this.formBuilder.group(
      {
        nom:[null]
      }
    )
  }
//Fonction pour save un pays dans la bdd en faisant appel au service pays
  ajouterPays() {
    
    this.paysService.ajoutPays(this.paysForm.value).subscribe();
    this.router.navigateByUrl('listePays');
  }
}
