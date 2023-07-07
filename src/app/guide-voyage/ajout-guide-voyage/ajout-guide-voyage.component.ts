import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';


@Component({
  selector: 'app-ajout-guide-voyage',
  templateUrl: './ajout-guide-voyage.component.html',
  styleUrls: ['./ajout-guide-voyage.component.css']
})
export class AjoutGuideVoyageComponent implements OnInit {

  guideForm!: FormGroup;

  constructor(
    private guideVoyageService: GuideVoyageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.guideForm = this.formBuilder.group({
      nom: [null],
      dateCreation: [null],
      description: [null]
    });
  }

  saveGuideVoyage(): void {
    this.guideVoyageService.saveGuideVoyage(this.guideForm.value).subscribe(() => {
      this.router.navigateByUrl('afficher-guide-voyage');
    });
  }
}
