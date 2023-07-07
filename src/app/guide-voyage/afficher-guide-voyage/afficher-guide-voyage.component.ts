import { Component, OnInit } from '@angular/core';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';


@Component({
  selector: 'app-afficher-guide-voyage',
  templateUrl: './afficher-guide-voyage.component.html',
  styleUrls: ['./afficher-guide-voyage.component.css']
})
export class AfficherGuideVoyageComponent implements OnInit {
  guides: GuideVoyage[] = [];

  constructor(private guideVoyageService: GuideVoyageService) {}

  ngOnInit(): void {
    this.getGuidesVoyage();
  }

  getGuidesVoyage(): void {
    this.guideVoyageService.getListeGuideVoyage().subscribe((guides: GuideVoyage[]) => {
      this.guides = guides;
    });
  }
}
