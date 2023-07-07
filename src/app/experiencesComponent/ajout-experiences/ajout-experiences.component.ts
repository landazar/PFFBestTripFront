import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-ajout-experiences',
  templateUrl: './ajout-experiences.component.html',
  styleUrls: ['./ajout-experiences.component.css']
})
export class AjoutExperiencesComponent implements OnInit {

  experiencesForm!:FormGroup;
  activite: Activite = new Activite(0, '', '', '', '', 0);
  showActiviteForm: boolean = false;

  constructor(private es:ExperiencesService, private formBuilder:FormBuilder, private router:Router) {}

  ngOnInit(): void {

    this.experiencesForm = this.formBuilder.group(
      {
        nom:[null],
        dateDebut:[null],
        dateFin:[null],
        type:[null],
        activites: [[]]
      }
    )
  }


  saveExperiences()
  {

    this.es.saveExperiences(this.experiencesForm.value).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
    console.log(this.experiencesForm.value.activites);
  }

  ajouterActivite() {
    this.experiencesForm.value.activites.push(this.activite);
    this.toggleActiviteForm();
  }

  toggleActiviteForm() {
    this.activite = new Activite(0, '', '', '', '', 0);
    this.showActiviteForm = !this.showActiviteForm;
  }

}
