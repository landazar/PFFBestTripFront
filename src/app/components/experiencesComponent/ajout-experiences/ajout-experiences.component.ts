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

  /**
   * Au moment de l'initialisation, on initialise le formulaire à des valeurs "nulles" pour qu'il puisse être complété par l'utilisateur
   */
  ngOnInit(): void {

    this.experiencesForm = this.formBuilder.group(
      {
        nom:[null],
        dateDebut:[null],
        dateFin:[null],
        type:[null],
        estApprouvee:[false],
        activites: [[]]
      }
    );
    console.log(this.experiencesForm.value);
  }

  username:string = "";

  /**
   * Fonction pour créer une expérience en passant par le service ExperiencesService
   */
  saveExperiences()
  {
    console.log(this.experiencesForm.value);
    this.es.saveExperiences(this.experiencesForm.value, this.username).subscribe();
    this.router.navigateByUrl("listeExperiences");
  }

  /**
   * Fonction pour supprimer une activité de la liste des activités de l'expérience
   * @param i : index de l'activité à supprimer dans la liste
   */
  supprimerActivite(i: number) {
    const activitesArray = this.experiencesForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.experiencesForm.get('activites')?.setValue(activitesArray);
  }

  /**
   * Fonction pour ajouter une activité au tableaux des activités de l'expérience
   */
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
  }

  /**
   * Fonction qui permet d'afficher ou non le formulaire pour ajouter une activité
   */
  toggleActiviteForm() {
    this.showActiviteForm = !this.showActiviteForm;
    this.isRestaurantSelected = false;
    this.isLieuSelected = false;
  }

  /**
   * Fonction qui s'occupe de gérer l'upload des photos et de garder la liste photos d'une activité à jour
   * @param event : événement qui permet de détecter le moment où l'utilisateur upload des photos
   * @param i : paramètre qui permet de vérifier si les photos ont été upload dans la boucle ngFor où dans le formulaire pour ajouter une activité
   * Remarque : FileReader.onload : asynchrone -> besoin d'utiliser promise
   */
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

  /**
   * Fonction qui permet de supprimer une photo de la liste des photos d'une activité
   * @param i : paramètre qui permet de vérifier si les photos ont été upload dans la boucle ngFor où dans le formulaire pour ajouter une activité
   * @param j : paramètre qui permet de savoir quelle photo doit être supprimée
   */
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

  /**
   * Fonction qui permet de gérer le changement d'activité (passage de restaurant à lieu et vice versa)
   * @param event : événement qui permet de détecter le moment où l'utilisateur change de type d'activité
   */
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
  
  /**
   * Fonction qui affiche le type de l'activité
   * @param activite : une activité
   * @returns 'Restaurant' ou 'Lieu' ou '' selon le type de l'activité
   */
  printActivity(activite: Activite): string {
    if (activite instanceof Restaurant) {
      return 'Restaurant';
    }
    if (activite instanceof Lieu) {
      return 'Lieu';
    }
    return '';
  }
}
