import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-afficher-guide-voyage',
  templateUrl: './afficher-guide-voyage.component.html',
  styleUrls: ['./afficher-guide-voyage.component.css']
})
export class AfficherGuideVoyageComponent implements OnInit {
  guides: GuideVoyage[] = [];

  nom: string = ""; //Ajout moi

  constructor(private guideVoyageService: GuideVoyageService, private router: Router, ar: ActivatedRoute) {
    this.nom =  ar.snapshot.params["destination"];
  }

  

  ngOnInit(): void {
    //this.getGuidesVoyage();

    this.getGuidesVoyage2(this.nom); //ajout moi
  }

  //getGuidesVoyage(): void {
    //this.guideVoyageService.getListeGuideVoyage().subscribe((guides: GuideVoyage[]) => {
      //this.guides = guides;
    //});
  //}

  //////////////////////////////////////////////////////////////////////////////////////// Ajout moi

  
  
  getGuidesVoyage2(nom: string): void {
    this.guideVoyageService.getListeGuideVoyage2(nom).subscribe((guides: GuideVoyage[]) => {
      this.guides = guides;
    });
  }

  ///////////////////////////////////////////////////////////////////////////////////


  supprimerGuide(idGuide: number): void {
    //this.guideVoyageService.deleteGuideVoyage(idGuide).subscribe(() => {
      //this.getGuidesVoyage();
    //});

    //this.guideVoyageService.deleteGuideVoyage(idGuide).subscribe(() => {
      //this.router.navigateByUrl("afficher-guide-voyage");
    //});

    this.guideVoyageService.deleteGuideVoyage(idGuide).subscribe(() => {
      this.getGuidesVoyage2("undefined");
    });
    
  }

  modifierGuide(idGuide: number): void {

    this.router.navigateByUrl("modifier-guide-voyage/"+idGuide);
  }

  detailsGuide(idGuide: number): void {

    this.router.navigateByUrl("details-guide-voyage/"+idGuide);
  }

  
  
}
