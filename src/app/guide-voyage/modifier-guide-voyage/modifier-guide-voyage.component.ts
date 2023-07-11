import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';

@Component({
  selector: 'app-modifier-guide-voyage',
  templateUrl: './modifier-guide-voyage.component.html',
  styleUrls: ['./modifier-guide-voyage.component.css']
})
export class ModifierGuideVoyageComponent implements OnInit {

  guideForm!: FormGroup;
  activite: Activite = new Activite(0, '', '', [], '', 0);
  showActiviteForm: boolean = false;
  guideId!: number;

//   constructor(
//     private guideVoyageService: GuideVoyageService,
//     private formBuilder: FormBuilder,
//     private activatedRoute: ActivatedRoute,
//     private router: Router
//   ) {
//     this.guideId = activatedRoute.snapshot.params['id'];
//   }

  ngOnInit(): void {
    this.guideForm = new FormGroup({
      nom: new FormControl(''),
      dateCreation: new FormControl(''),
      description: new FormControl(''),
      activites: new FormControl([])
    });

//     this.guideVoyageService.getGuideVoyageById(this.guideId).subscribe(guideVoyage => {
//       this.guideForm.patchValue({
//         nom: guideVoyage.nom,
//         dateCreation: guideVoyage.dateCreation,
//         description: guideVoyage.description,
//         activites: guideVoyage.activites
//       });
//     });
//   }

//   saveGuideVoyage(): void {
//     if (this.guideForm.invalid) {
//       return;
//     }

//     const guideVoyage = {
//       id: this.guideId,
//       ...this.guideForm.value
//     };

//     this.guideVoyageService.modifierGuideVoyage(guideVoyage).subscribe(() => {
//       this.router.navigateByUrl('/afficher-guide-voyage');
//     });
//   }

//   supprimerActivite(index: number): void {
//     const activites = this.guideForm.get('activites')?.value as Activite[];
//     activites.splice(index, 1);
//     this.guideForm.get('activites')?.setValue(activites);
//   }

//   ajouterActivite(): void {
//     const activites = this.guideForm.get('activites')?.value as Activite[];
//    // activites.push(this.activite);
//     this.guideForm.get('activites')?.setValue(activites);
//     this.toggleActiviteForm();
//   }

//   toggleActiviteForm(): void {
//    // this.activite = new Activite(0, '', '', [], '', 0);
//     this.showActiviteForm = !this.showActiviteForm;
//   }

//   handlePhotoUpload(event: any): void {
//     const files = event.target.files;
//     const photos: any[] = [];
//     for (let i = 0; i < files.length; i++) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         photos.push(e.target.result);
//       };
//       reader.readAsDataURL(files[i]);
//     }
//    // this.activite.photos = photos;
//   }

//   supprimerPhoto(activiteIndex: number, photoIndex: number): void {
//     const activites = this.guideForm.get('activites')?.value as Activite[];
//     activites[activiteIndex].photos.splice(photoIndex, 1);
//     this.guideForm.get('activites')?.setValue(activites);
//   }
 }
}
