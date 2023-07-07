import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-afficher-guide-voyage',
  templateUrl: './afficher-guide-voyage.component.html',
  styleUrls: ['./afficher-guide-voyage.component.css']
})
export class AfficherGuideVoyageComponent implements OnInit {
  guides: GuideVoyage[] = [];

  constructor(private guideVoyageService: GuideVoyageService, private router: Router) {}


  ngOnInit(): void {
    this.getGuidesVoyage();
  }

  getGuidesVoyage(): void {
    this.guideVoyageService.getListeGuideVoyage().subscribe((guides: GuideVoyage[]) => {
      this.guides = guides;
    });
  }

  supprimerGuide(idGuide: number): void {
    this.guideVoyageService.deleteGuideVoyage(idGuide).subscribe(() => {
      this.getGuidesVoyage();
    });
  }

  modifierGuide(idGuide: number): void {

    this.router.navigateByUrl(`/modifier-guide-voyage/${idGuide}`);
  }
  
}
