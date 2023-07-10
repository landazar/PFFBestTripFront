import { Component, OnInit } from '@angular/core';
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
    )
  }

  saveExperiences()
  {

    console.log(this.experiencesForm.value);
    this.es.saveExperiences(this.experiencesForm.value).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
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
