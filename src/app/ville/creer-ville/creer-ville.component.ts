import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ville } from 'src/app/Model/ville.model';
import { VilleService } from 'src/app/Service/ville.service';

@Component({
  selector: 'app-creer-ville',
  templateUrl: './creer-ville.component.html',
  styleUrls: ['./creer-ville.component.css']
})
export class CreerVilleComponent implements OnInit {
  villeForm: FormGroup;
  ville: Ville = new Ville(0, '');

  constructor(private oeuvreService: VilleService, private formBuilder: FormBuilder) {
    this.villeForm = this.formBuilder.group({
      id: [''],
      nom: [''],
    });
  }

  ngOnInit(): void {
  }

  ajouterVille(ville: Ville) {
    this.oeuvreService.ajoutVille(ville).subscribe(() => {
      this.resetForm();
    });
  }

  resetForm() {
    this.villeForm.reset();
    this.ville = new Ville(0, '');
  }
}
