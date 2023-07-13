import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';

@Component({
  selector: 'app-details-guide-voyage',
  templateUrl: './details-guide.component.html',
  styleUrls: ['./details-guide.component.css']
})
export class DetailsGuideComponent implements OnInit {
  guide!: GuideVoyage;

  notation: number = 0;

  idGuide: number = 0;

  constructor(
    private route: ActivatedRoute,
    private guideVoyageService: GuideVoyageService,
    private router: Router
  ) {this.idGuide = route.snapshot.params["idGuide"]}

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

  getNbrEtoile() {
    console.log(this.notation);
    console.log("id : " + this.idGuide);
    this.guideVoyageService.setNoteGuide(this.idGuide, this.notation).subscribe();
    this.router.navigateByUrl("afficher-guide-voyage");
  }
}
