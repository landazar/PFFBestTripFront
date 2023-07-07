import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pays } from 'src/app/Model/pays.model';
import { PaysService } from 'src/app/Service/pays.service';

@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html',
  styleUrls: ['./update-pays.component.css']
})
export class UpdatePaysComponent implements OnInit {
  paysForm!: FormGroup;
  idPays: number;
  pays!: Pays;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private paysService: PaysService, private route:Router) {
    this.idPays = ar.snapshot.params["idPays"];
  }

  ngOnInit(): void {
    this.paysService.getPaysById (this.idPays).subscribe(pays => {
      this.pays = pays;
      this.paysForm = this.formBuilder.group({
        idPays: [pays.id],
        nom: [pays.nom],
      });
    })
  }

  updatePays(pays: Pays) {
    this.paysService.updatePays(pays).subscribe(() => {
      this.route.navigateByUrl("afficherPays");
    });
  }
}
