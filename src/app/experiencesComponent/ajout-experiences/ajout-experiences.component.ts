import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-ajout-experiences',
  templateUrl: './ajout-experiences.component.html',
  styleUrls: ['./ajout-experiences.component.css']
})
export class AjoutExperiencesComponent implements OnInit {

  experiencesForm!:FormGroup;

  constructor(private es:ExperiencesService, private formBuilder:FormBuilder, private router:Router) {}

  ngOnInit(): void {

    this.experiencesForm = this.formBuilder.group(
      {
        nom:[null],
        dateDebut:[null],
        dateFin:[null],
        type:[null]
      }
    )
  }


  saveExperiences()
  {

    this.es.saveExperiences(this.experiencesForm.value).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

}
