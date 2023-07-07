import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pays } from 'src/app/Model/pays.model';
import { PaysService } from 'src/app/Service/pays.service';

@Component({
  selector: 'app-creer-pays',
  templateUrl: './creer-pays.component.html',
  styleUrls: ['./creer-pays.component.css']
})
export class CreerPaysComponent implements OnInit {
  paysForm: FormGroup;
  pays: Pays = new Pays(0, '');

  constructor(private oeuvreService: PaysService, private formBuilder: FormBuilder) {
    this.paysForm = this.formBuilder.group({
      id: [''],
      nom: [''],
    });
  }

  ngOnInit(): void {
  }

  ajouterPays(pays: Pays) {
    this.oeuvreService.ajoutPays(pays).subscribe(() => {
      this.resetForm();
    });
  }

  resetForm() {
    this.paysForm.reset();
    this.pays = new Pays(0, '');
  }
}
