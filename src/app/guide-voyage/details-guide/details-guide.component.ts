import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';

@Component({
  selector: 'app-details-guide-voyage',
  templateUrl: './details-guide.component.html',
  styleUrls: ['./details-guide.component.css']
})
export class DetailsGuideComponent implements OnInit {
  guide!: GuideVoyage;

  constructor(
    private route: ActivatedRoute,
    private guideVoyageService: GuideVoyageService
  ) { }

  ngOnInit(): void {
    this.getGuideVoyage();
  }

  getGuideVoyage(): void {
    this.route.paramMap.subscribe(params => {
      const idGuide = +params.get('idGuide')!;
      this.guideVoyageService.getGuideVoyageById(idGuide).subscribe((guide: GuideVoyage) => {
        this.guide = guide;
      });
    });
  }
}
