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
  paysForm?: FormGroup;
  id!: number;
  pays!: Pays;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private paysService: PaysService, private route:Router) {
    this.id = ar.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.paysService.getPaysById (this.id).subscribe(pays => {
      this.paysForm = this.formBuilder.group({
        id: [pays.id],
        nom: [pays.nom]
      });
    })
  }
    

  updatePays() {
    this.paysService.updatePays(this.paysForm?.value).subscribe();
    this.route.navigateByUrl("listePays");
  }
}
