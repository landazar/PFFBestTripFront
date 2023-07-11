import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ville } from 'src/app/Model/ville.model';
import { VilleService } from 'src/app/Service/ville.service';

@Component({
  selector: 'app-creer-ville',
  templateUrl: './creer-ville.component.html',
  styleUrls: ['./creer-ville.component.css']
})
export class CreerVilleComponent implements OnInit {
  villeForm!: FormGroup;

  constructor(private villeService: VilleService, private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit(): void {

    this.villeForm = this.formBuilder.group(
      {
        nom:[null]
      }
    )
  }

  ajouterVille() {
    this.villeService.ajoutVille(this.villeForm.value).subscribe();
    this.router.navigateByUrl('listeVille');
  }
}