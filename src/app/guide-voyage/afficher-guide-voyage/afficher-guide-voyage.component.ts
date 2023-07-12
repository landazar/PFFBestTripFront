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

  constructor(private guideVoyageService: GuideVoyageService, private router: Router, ar: ActivatedRoute, private formBuilder: FormBuilder) {
    this.nom =  ar.snapshot.params["destination"];
  }

  
  
  ngOnInit(): void {

    this.getGuidesVoyage(this.nom);

    this.doesGuideExist(this.nom);

    
    
  }

  
  getGuidesVoyage(nom: string): void {
    this.guideVoyageService.getListeGuideVoyage(nom).subscribe((guides: GuideVoyage[]) => {
      this.guides = guides;
    });
  }

  doesGuideExist(nom: string) {
    this.guideVoyageService.doesGuideExist(nom).subscribe((result: boolean) => {
      this.param = result;
    });
    console.log(this.param);
  }


  supprimerGuide(idGuide: number): void {

    this.guideVoyageService.deleteGuideVoyage(idGuide).subscribe(() => {
      this.getGuidesVoyage("undefined");
    });
    
  }

  modifierGuide(idGuide: number): void {

    this.router.navigateByUrl("modifier-guide-voyage/"+idGuide);
  }

  detailsGuide(idGuide: number): void {

    this.router.navigateByUrl("details-guide-voyage/"+idGuide);
  }

  
  
}
