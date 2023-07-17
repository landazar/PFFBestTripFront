import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-afficher-guide-voyage',
  templateUrl: './afficher-guide-voyage.component.html',
  styleUrls: ['./afficher-guide-voyage.component.css']
})
export class AfficherGuideVoyageComponent implements OnInit {
  guides: GuideVoyage[] = [];

  nom: string = "";
  param: boolean = false;
  notation: number = 0;

  constructor(
    private guideVoyageService: GuideVoyageService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    // Récupère les valeurs des paramètres de route "destination" et "notation"
    this.nom = route.snapshot.params["destination"];
    this.notation = route.snapshot.params["notation"];
  }

  /**
   * Initialise le composant.
   */
  ngOnInit(): void {
    // Récupère la liste des guides de voyage
    this.getGuidesVoyage(this.nom);
    // Vérifie si un guide de voyage avec le nom donné existe
    this.doesGuideExist(this.nom);
  }

  /**
   * Récupère la liste des guides de voyage en fonction du nom fourni.
   */
  getGuidesVoyage(nom: string): void {
    this.guideVoyageService.getListeGuideVoyage(nom).subscribe((guides: GuideVoyage[]) => {
      this.guides = guides;
    });
  }

  /**
   * Vérifie si un guide de voyage avec le nom donné existe.
   */
  doesGuideExist(nom: string) {
    this.guideVoyageService.doesGuideExist(nom).subscribe((result: boolean) => {
      this.param = result;
    });
  }

  /**
   * Supprime un guide de voyage en fonction de son ID.
   */
  supprimerGuide(idGuide: number): void {
    this.guideVoyageService.deleteGuideVoyage(idGuide).subscribe(() => {
      this.getGuidesVoyage("undefined");
    });
  }

  /**
   * Redirige vers la page de modification d'un guide de voyage en fonction de son ID.
   */
  modifierGuide(idGuide: number): void {
    this.router.navigateByUrl("modifier-guide-voyage/"+idGuide);
  }

  /**
   * Redirige vers la page de détails d'un guide de voyage en fonction de son ID.
   */
  detailsGuide(idGuide: number): void {
    this.router.navigateByUrl("details-guide-voyage/"+idGuide);
  }

  /**
   * Approuve un guide de voyage en fonction de son ID.
   */
  approuverGuide(idGuide:number) {
    this.guideVoyageService.approuverGuide(idGuide).subscribe(() => {
      this.getGuidesVoyage(this.nom);
    })
  }
}
