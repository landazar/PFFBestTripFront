import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuideVoyage } from 'src/app/Model/guide-voyage';

import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';

@Component({
  selector: 'app-modifier-guide-voyage',
  templateUrl: './modifier-guide-voyage.component.html',
  styleUrls: ['./modifier-guide-voyage.component.css']
})
export class ModifierGuideVoyageComponent implements OnInit {

  guideForm?: FormGroup; 
  idGuide: number;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private guideVoyageService: GuideVoyageService,
    private router: Router
  ) {
    this.idGuide = activatedRoute.snapshot.params['idGuide'];
  }

  ngOnInit(): void {
    this.guideVoyageService.getGuideVoyageById(this.idGuide).subscribe(GuideVoyage => {
      this.guideForm = this.formBuilder.group({
        idGuide: [GuideVoyage .idGuide],
        nom: [GuideVoyage .nom],
        dateCreation: [GuideVoyage .dateCreation],
        description: [GuideVoyage .description]
      });
    });
  }

 modifierGuideVoyage(): void {
    this.guideVoyageService.modifierGuideVoyage(this.guideForm?.value).subscribe(() => {
      this.router.navigateByUrl('afficher-guide-voyage');
    });
  }
}
