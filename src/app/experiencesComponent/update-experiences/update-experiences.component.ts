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

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private es:ExperiencesService, private router:Router, private us:UtilisateurService) {
    this.idExperience = ar.snapshot.params["idExperience"];
  }

  ngOnInit(): void {
    this.es.getUsernameById(this.idExperience).subscribe(username => {
      var u = JSON.stringify(username); 
      this.username = JSON.parse(u);
    });
    this.es.getExperiencesById(this.idExperience).subscribe(experiences => {
      console.log(experiences);
      this.experiencesForm = this.formBuilder.group({
          idExperience: [experiences.idExperience],
          nom: [experiences.nom],
          dateDebut: [experiences.dateDebut],
          dateFin: [experiences.dateFin],
          type: [experiences.type],
          activites: [experiences.activites]
        })
    });
    // this.username = this.es.getUsernameById(this.idExperience);
  }

  updateExperiences() {
    console.log(this.experiencesForm.value);
    this.es.updateExperiences(this.experiencesForm?.value, this.username).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
  }

  ajouterActivite() {
    console.log("ajout d'une activité");
    if (this.isRestaurantSelected) {
      this.experiencesForm.value.activites.push(this.restaurant);
    } else {
      this.experiencesForm.value.activites.push(this.lieu);
    }
    this.toggleActiviteForm();
    this.isRestaurantSelected = false;
    this.isLieuSelected = false;
    console.log(this.experiencesForm.value);
  }

  toggleActiviteForm() {
    this.showActiviteForm = !this.showActiviteForm;
    this.isRestaurantSelected = false;
    this.isLieuSelected = false;
  }
  
  // FileReader.onload : asynchrone -> besoin d'utiliser promise
  handlePhotoUpload(event: any, i: number) {
    const files = event.target.files;
    const photosPromises: Promise<string>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const promise = new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(file);
      });
      photosPromises.push(promise);
    }
  
    Promise.all(photosPromises).then((photos) => {
      const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
      if (i != -1) {
        activitesArray[i].photos.push(...photos);
        this.experiencesForm.get('activites')?.patchValue(activitesArray);
      } else {
        if (this.isRestaurantSelected) {
          this.restaurant.photos = this.restaurant.photos.concat(photos);
        } else {
          this.lieu.photos = this.lieu.photos.concat(photos);
        }
      }
      event.target.value = null;
    });
  }

  supprimerPhoto(i: number, j: number) {
    if (i != -1) {
      const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
      activitesArray[i].photos.splice(j, 1);
      this.experiencesForm.get('activites')?.setValue(activitesArray);
    } else {
      if (this.isRestaurantSelected) {
        this.restaurant.photos.splice(j, 1);
      } else {
        this.lieu.photos.splice(j, 1);
      }
    }
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
