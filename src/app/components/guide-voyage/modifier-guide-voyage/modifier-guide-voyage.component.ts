import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { Lieu } from 'src/app/Model/lieu';
import { Restaurant } from 'src/app/Model/restaurant';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-modifier-guide-voyage',
  templateUrl: './modifier-guide-voyage.component.html',
  styleUrls: ['./modifier-guide-voyage.component.css']
})
export class ModifierGuideVoyageComponent implements OnInit {

  guideForm?: FormGroup;
  restaurant: Restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
  lieu: Lieu = new Lieu(0, '', '', [], '', 0, '');
  showActiviteForm: boolean = false;
  isRestaurantSelected: boolean = false;
  isLieuSelected: boolean = false;
  guideId!: number; 
  username!:string;

  constructor(
    private guideVoyageService: GuideVoyageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private us:UtilisateurService
  ) {
    // Récupérer l'ID du guide de voyage à modifier depuis les paramètres de l'URL
    this.guideId = route.snapshot.params["idGuide"];
  }

  ngOnInit(): void {
    // Récupérer les détails du guide de voyage à modifier
    this.guideVoyageService.getGuideVoyageById(this.guideId).subscribe((guideVoyage: any) => {
      console.log(guideVoyage.nom)
      // Initialiser le formulaire avec les valeurs du guide de voyage existant
      this.guideForm = this.formBuilder.group({
        idGuide: [guideVoyage.idGuide],
        nom: [guideVoyage.nom],
        dateCreation: [guideVoyage.dateCreation],
        description: [guideVoyage.description],
        activites: [guideVoyage.activites],
        listeU:[guideVoyage.listeU]
      });
      console.log(this.guideForm.value)
    });
  }

  ajouterUtilisateur() {
    // Ajouter un utilisateur au guide de voyage en cours de modification
    this.us.getUtilisateurByUsername(this.username).subscribe(data => {
      console.log("data :" + data);
      this.guideForm?.value.listeU.push(data);
      this.username="";
    });
  }

  supprimerUtilisateur(i: number) {
    // Supprimer un utilisateur du guide de voyage en cours de modification
    const UtilisateurArray = this.guideForm?.get('listeU')?.value as Utilisateur[];
    UtilisateurArray.splice(i, 1);
    this.guideForm?.get('listeU')?.setValue(UtilisateurArray);
  }

  updateGuideVoyage() {
    // Mettre à jour le guide de voyage
    console.log(this.guideForm?.value.nom);
    console.log(this.guideForm?.value);
    const activitesArray = this.guideForm?.get('activites')?.value as Activite[];
    console.log("taille act=" + activitesArray.length);
    activitesArray.forEach(element => {
      console.log("act nom=" + element.nom);
    });
    this.guideVoyageService.modifierGuideVoyage(this.guideForm?.value).subscribe();
    this.router.navigateByUrl("afficher-guide-voyage");
  }

  supprimerActivite(i: number) {
    // Supprimer une activité du guide de voyage en cours de modification
    const activitesArray = this.guideForm?.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.guideForm?.get('activites')?.setValue(activitesArray);
  }

  ajouterActivite() {
    // Ajouter une activité au guide de voyage en cours de modification
    console.log("ajout d'une activité");
    if (this.isRestaurantSelected) {
      this.guideForm?.value.activites.push(this.restaurant);
    } else {
      this.guideForm?.value.activites.push(this.lieu);
    }
    this.toggleActiviteForm();
    this.isRestaurantSelected = false;
    this.isLieuSelected = false;
    console.log(this.guideForm?.value);
  }

  toggleActiviteForm() {
    // Afficher ou masquer le formulaire pour ajouter une activité
    this.showActiviteForm = !this.showActiviteForm;
    this.isRestaurantSelected = false;
    this.isLieuSelected = false;
  }

  handlePhotoUpload(event: any, i: number) {
    // Gérer le téléchargement de photos pour une activité
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

// Gérer le téléchargement de photos pour une activité
Promise.all(photosPromises).then((photos) => {
  const activitesArray = this.guideForm?.get('activites')?.value as Activite[];
  if (i != -1) {
    // Ajouter les photos à l'activité spécifique dans le formulaire
    activitesArray[i].photos.push(...photos);
    this.guideForm?.get('activites')?.patchValue(activitesArray);
  } else {
    if (this.isRestaurantSelected) {
      // Concaténer les photos avec celles du restaurant sélectionné
      this.restaurant.photos = this.restaurant.photos.concat(photos);
    } else {
      // Concaténer les photos avec celles du lieu sélectionné
      this.lieu.photos = this.lieu.photos.concat(photos);
    }
  }
  event.target.value = null;
});

  }

  supprimerPhoto(i: number, j: number) {
    // Supprimer une photo d'une activité
    if (i != -1) {
      const activitesArray = this.guideForm?.get('activites')?.value as Activite[];
      activitesArray[i].photos.splice(j, 1);
      this.guideForm?.get('activites')?.setValue(activitesArray);
    } else {
      if (this.isRestaurantSelected) {
        this.restaurant.photos.splice(j, 1);
      } else {
        this.lieu.photos.splice(j, 1);
      }
    }
  }

  printActivity(activity: Activite): string {
    // Retourner le type d'activité sous forme de chaîne de caractères pour affichage
    if (activity instanceof Restaurant) {
      return 'Restaurant';
    }
    if (activity instanceof Lieu) {
      return 'Lieu';
    }
    return '';
  }

  handleActivityTypeChange(event: Event) {
    // Gérer le changement de type d'activité sélectionné
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
}
