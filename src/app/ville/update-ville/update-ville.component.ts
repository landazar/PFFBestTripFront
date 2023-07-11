import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/Model/ville.model';
import { VilleService } from 'src/app/Service/ville.service';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent implements OnInit {
  villeForm!: FormGroup;
  id!: number;
  ville!: Ville;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private villeService: VilleService, private route:Router) {
    this.id = ar.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.villeService.getVilleById (this.id).subscribe(ville => {
      this.villeForm = this.formBuilder.group({
        id: [ville.id],
        nom: [ville.nom]
      });
    })
  }

  updateVille() {
    this.villeService.updateVille(this.villeForm.value).subscribe();
    this.route.navigateByUrl("listeVille");
  }
}

