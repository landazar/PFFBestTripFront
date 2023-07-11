import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { Lieu } from 'src/app/Model/lieu';
import { Restaurant } from 'src/app/Model/restaurant';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-ajout-experiences',
  templateUrl: './ajout-experiences.component.html',
  styleUrls: ['./ajout-experiences.component.css']
})
export class AjoutExperiencesComponent implements OnInit {

  experiencesForm!:FormGroup;
  restaurant: Restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
  lieu: Lieu = new Lieu(0, '', '', [], '', 0, '');
  showActiviteForm: boolean = false;
  isRestaurantSelected: boolean = false;
  isLieuSelected: boolean = false;

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
    );
  }

  username:string = "";

  saveExperiences()
  {
    console.log(this.experiencesForm.value);
    this.es.saveExperiences(this.experiencesForm.value, this.username).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
  }

  ajouterActivite(event: Event) {
    console.log("ajout d'une activité");
    if (this.isRestaurantSelected) {
      this.experiencesForm.value.activites.push(this.restaurant);
    } else {
      this.experiencesForm.value.activites.push(this.lieu);
    }
    this.toggleActiviteForm(event);
    this.isRestaurantSelected = false;
    this.isLieuSelected = false;
    console.log(this.experiencesForm.value);
  }

  toggleActiviteForm(event: Event) {
    this.showActiviteForm = !this.showActiviteForm;
    console.log(this.showActiviteForm);
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
