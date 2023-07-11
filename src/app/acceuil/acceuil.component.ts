import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  rechercheBarreForm!:FormGroup

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    
    this.rechercheBarreForm = this.formBuilder.group (
      {
        destination:[null],
        depart:[null],
        type:[null]
      }
    );
  }

  recherche() {
    
  }

}
