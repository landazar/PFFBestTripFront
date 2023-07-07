import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ville } from 'src/app/Model/ville.model';
import { VilleService } from 'src/app/Service/ville.service';

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent implements OnInit {
  villeForm!: FormGroup;
  idVille: number;
  ville!: Ville;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private villeService: VilleService, private route:Router) {
    this.idVille = ar.snapshot.params["idVille"];
  }

  ngOnInit(): void {
    this.villeService.getVilleById (this.idVille).subscribe(ville => {
      this.ville = ville;
      this.villeForm = this.formBuilder.group({
        idVille: [ville.id],
        nom: [ville.nom],
      });
    })
  }

  updateVille(ville: Ville) {
    this.villeService.updateVille(ville).subscribe(() => {
      this.route.navigateByUrl("afficherVille");
    });
  }
}
