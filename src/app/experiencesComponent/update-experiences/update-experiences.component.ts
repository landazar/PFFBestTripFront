import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { Experiences } from 'src/app/Model/experiences';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-update-experiences',
  templateUrl: './update-experiences.component.html',
  styleUrls: ['./update-experiences.component.css']
})
export class UpdateExperiencesComponent implements OnInit {

  experiencesForm!:FormGroup;
  idExperience!:number;

  /*
  activite: Activite = new Activite(0, '', '', [], '', 0);
  showActiviteForm: boolean = false;
  */
  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private es:ExperiencesService, private router:Router) {
    this.idExperience = ar.snapshot.params["idExperience"];
    this.es.getExperiencesById(this.idExperience).subscribe(experiences => {
      console.log(experiences.activites);
      this.experiencesForm = this.formBuilder.group({
          idExperience: [experiences.idExperience],
          nom: [experiences.nom],
          dateDebut: [experiences.dateDebut],
          dateFin: [experiences.dateFin],
          type: [experiences.type],
          activites: [experiences.activites]
        })
    });
  }


  ngOnInit(): void {
    
  }

  updateExperiences() {
    this.es.updateExperiences(this.experiencesForm?.value).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
    console.log(this.experiencesForm.value.activites);
  }
  /*
  ajouterActivite() {
    this.experiencesForm.value.activites.push(this.activite);
    console.log(this.experiencesForm.value.activites);
    this.toggleActiviteForm();
  }

  toggleActiviteForm() {
    this.activite = new Activite(0, '', '', [], '', 0);
    this.showActiviteForm = !this.showActiviteForm;
  }
  
  handlePhotoUpload(event: any) {
    const files = event.target.files;
    const photos: any[] = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        photos.push(e.target.result);
      };
      reader.readAsDataURL(files[i]);
    }
    this.activite.photos = photos;
  }
  */
  supprimerPhoto(i: number, j: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray[i].photos.splice(j, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
    console.log(this.experiencesForm.value.activites);
  }
}
