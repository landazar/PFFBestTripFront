import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { Lieu } from 'src/app/Model/lieu';
import { Restaurant } from 'src/app/Model/restaurant';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-ajout-guide-voyage',
  templateUrl: './ajout-guide-voyage.component.html',
  styleUrls: ['./ajout-guide-voyage.component.css']
})
export class AjoutGuideVoyageComponent implements OnInit {

  guideForm!: FormGroup;
  restaurant: Restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
  lieu: Lieu = new Lieu(0, '', '', [], '', 0, '');
  showActiviteForm: boolean = false;
  isRestaurantSelected: boolean = false;
  isLieuSelected: boolean = false;

  constructor(
    private guideVoyageService: GuideVoyageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private us:UtilisateurService
  ) {}


  username!:string;
  

  ngOnInit(): void {
    this.guideForm = this.formBuilder.group({
      nom: [null],
      dateCreation: [null],
      description: [null],
      activites: [[]],
      listeU:[[]]
    });
    
  }

  ajouterUtilisateur()
  {
    this.us.getUtilisateurByUsername(this.username).subscribe(data => {
      console.log("data :" + data);
      this.guideForm.value.listeU.push(data);
      this.username="";
    });
  }

  supprimerUtilisateur(i: number) {
    const UtilisateurArray = this.guideForm.get('listeU')?.value as Utilisateur[];
    UtilisateurArray.splice(i, 1);
    this.guideForm.get('listeU')?.setValue(UtilisateurArray);
  }

  saveGuideVoyage(): void {
    
    console.log(this.guideForm.value.listeU);
    this.guideVoyageService.saveGuideVoyage(this.guideForm.value).subscribe();

    this.router.navigateByUrl('afficher-guide-voyage');

  }  

  supprimerActivite(i: number) {
    const activitesArray = this.guideForm.get('activites')?.value as Activite[];
    activitesArray.splice(i, 1);
    this.guideForm.get('activites')?.setValue(activitesArray);
  }

  ajouterActivite() {
    console.log("ajout d'une activité");
    if (this.isRestaurantSelected) {
      this.guideForm.value.activites.push(this.restaurant);
    } else {
      this.guideForm.value.activites.push(this.lieu);
    }
    this.toggleActiviteForm();
    console.log(this.guideForm.value);
  }

  toggleActiviteForm() {
    this.showActiviteForm = !this.showActiviteForm;
    this.restaurant = new Restaurant(0, '', '', [], '', 0, '', '');
    this.lieu = new Lieu(0, '', '', [], '', 0, '');
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
    const activitesArray = this.guideForm.get('activites')?.value as Activite[];
    activitesArray[i].photos.splice(j, 1);
    this.guideForm.get('activites')?.setValue(activitesArray);
    console.log(this.guideForm.value.activites);
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
  
}
