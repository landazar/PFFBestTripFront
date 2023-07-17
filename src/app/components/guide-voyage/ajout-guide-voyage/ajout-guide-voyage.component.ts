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
    private us: UtilisateurService
  ) {}

  username!: string;

  ngOnInit(): void {
    // Initialisation du formulaire
    this.guideForm = this.formBuilder.group({
      nom: [null],
      dateCreation: [null],
      description: [null],
      activites: [[]],
      listeU: [[]]
    });
  }

  // Ajoute un utilisateur à la liste des utilisateurs du guide de voyage
  ajouterUtilisateur(): void {
    this.us.getUtilisateurByUsername(this.username).subscribe(data => {
      this.guideForm.value.listeU.push(data);
      this.username = "";
    });
  }

  // Supprime un utilisateur de la liste des utilisateurs du guide de voyage
  supprimerUtilisateur(i: number): void {
    const UtilisateurArray = this.guideForm.get('listeU')?.value as Utilisateur[];
    UtilisateurArray.splice(i, 1); // Supprime l'utilisateur à l'index i de la liste
    this.guideForm.get('listeU')?.setValue(UtilisateurArray);
  }

  // Sauvegarde le guide de voyage
  saveGuideVoyage(): void {
    this.guideVoyageService.saveGuideVoyage(this.guideForm.value).subscribe();
    this.router.navigateByUrl('afficher-guide-voyage');
  }

  // Supprime une activité du guide de voyage
  supprimerActivite(i: number): void {
    // Récupère la liste des activités du formulaire
    const activitesArray = this.guideForm.get('activites')?.value as Activite[];// Récupère les activités du formulaire en tant que tableau d'objets de type 'Activite[]'
    activitesArray.splice(i, 1); // Supprime l'activité à l'index i de la liste
    this.guideForm.get('activites')?.setValue(activitesArray);
  }
}
