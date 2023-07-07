import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiences } from 'src/app/Model/experiences';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-update-experiences',
  templateUrl: './update-experiences.component.html',
  styleUrls: ['./update-experiences.component.css']
})
export class UpdateExperiencesComponent implements OnInit {

  experiencesForm?:FormGroup;
  idExperience!:number;
  
  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private es:ExperiencesService, private router:Router) {
    this.idExperience = ar.snapshot.params["idExperience"];
  }


  ngOnInit(): void {
    this.es.getExperiencesById(this.idExperience).subscribe(experiences => {
    this.experiencesForm = this.formBuilder.group({
        idExperience: [experiences.idExperience],
        nom: [experiences.nom],
        dateDebut: [experiences.dateDebut],
        dateFin: [experiences.dateFin],
        type: [experiences.type]
      })
  });
  }

  updateExperiences() {
    this.es.updateExperiences(this.experiencesForm?.value).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }
}
