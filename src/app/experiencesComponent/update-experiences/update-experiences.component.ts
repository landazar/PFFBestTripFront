import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { Experiences } from 'src/app/Model/experiences';
import { Lieu } from 'src/app/Model/lieu';
import { Restaurant } from 'src/app/Model/restaurant';
import { ExperiencesService } from 'src/app/Service/experiences.service';
import { AjoutExperiencesComponent } from '../ajout-experiences/ajout-experiences.component';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-experiences',
  templateUrl: './update-experiences.component.html',
  styleUrls: ['./update-experiences.component.css']
})
export class UpdateExperiencesComponent implements OnInit {

  experiencesForm!:FormGroup;
  restaurant: Restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
  lieu: Lieu = new Lieu(0, '', '', [], '', 0, '');
  showActiviteForm: boolean = false;
  isRestaurantSelected: boolean = false;
  isLieuSelected: boolean = false;
  idExperience!:number;
  username!:string;
  /*
  activite: Activite = new Activite(0, '', '', [], '', 0);
  showActiviteForm: boolean = false;
  */
  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private es:ExperiencesService, private router:Router, private us:UtilisateurService) {

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
    this.es.getUsernameById(this.idExperience).subscribe(username => {
      var u = JSON.stringify(username); 
      this.username = JSON.parse(u);
      console.log("affichage : " + u);
    });
    // this.username = this.es.getUsernameById(this.idExperience);
  }

  


  updateExperiences() {
    this.es.updateExperiences(this.experiencesForm?.value, this.username).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
    console.log(this.experiencesForm.value.activites);
  }

  ajouterActivite() {
    if (this.isRestaurantSelected) {
      this.experiencesForm.value.activites.push(this.restaurant);
    } else {
      this.experiencesForm.value.activites.push(this.lieu);
    }
    this.toggleActiviteForm();
  }

  toggleActiviteForm() {
    this.restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
    this.lieu = new Lieu(0, '', '', [], '', 0, '');
    this.showActiviteForm = !this.showActiviteForm;
    console.log(this.showActiviteForm);
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
    if (this.isRestaurantSelected) {
      this.restaurant.photos = photos;
    } else {
      this.lieu.photos = photos;
    }
  }

  supprimerPhoto(i: number, j: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray[i].photos.splice(j, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
  }

  handleActivityTypeChange(event: Event) {
    const selectedActivityType = (event.target as HTMLInputElement).value;
    this.restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
    this.lieu = new Lieu(0, '', '', [], '', 0, '');
    if (selectedActivityType === 'restaurant') {
      this.isRestaurantSelected = true;
      this.isLieuSelected = false;
    } else {
      this.isRestaurantSelected = false;
      this.isLieuSelected = true;
    }
  }

  printActivity(activity: Activite): string {
    if (activity instanceof Restaurant) {
      return 'Restaurant';
    }
    if (activity instanceof Lieu) {
      return 'Lieu';
    }
    return '';
  }
}
