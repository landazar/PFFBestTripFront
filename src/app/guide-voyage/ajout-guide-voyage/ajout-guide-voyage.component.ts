import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Activite } from 'src/app/Model/activite';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';

@Component({
  selector: 'app-ajout-guide-voyage',
  templateUrl: './ajout-guide-voyage.component.html',
  styleUrls: ['./ajout-guide-voyage.component.css']
})
export class AjoutGuideVoyageComponent implements OnInit {

  guideForm!: FormGroup;
  // activite: Activite = new Activite(0, '', '', [], '', 0); 
  showActiviteForm: boolean = false;

  constructor(
    private guideVoyageService: GuideVoyageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.guideForm = this.formBuilder.group({
    //   nom: [null],
    //   dateCreation: [null],
    //   description: [null],
    //   activites: [[]]
    // });
  }

//   saveGuideVoyage(): void {
//     const activitesArray = this.guideForm.get('activites')?.value as Activite[];
  
//     const saveActivitesPromises: Promise<any>[] = [];
  
//     // Sauvegarder toutes les activités individuellement
//     activitesArray.forEach(activite => {
//       const saveActivitePromise = this.guideVoyageService.saveActivite(activite).toPromise();
//       saveActivitesPromises.push(saveActivitePromise);
//     });
  
//     // Attendre la sauvegarde de toutes les activités
//     Promise.all(saveActivitesPromises).then(() => {
//       // Une fois que toutes les activités sont sauvegardées, sauvegarder le guide de voyage
//       this.guideVoyageService.saveGuideVoyage(this.guideForm.value).subscribe(() => {
//         this.router.navigateByUrl('afficher-guide-voyage');
//       });
//     });
//   }  

//   supprimerActivite(i: number) {
//     const activitesArray = this.guideForm.get('activites')?.value as Activite[];
//     activitesArray.splice(i, 1);
//     this.guideForm.get('activites')?.setValue(activitesArray);
//   }

//   ajouterActivite() {
//     this.guideForm.value.activites.push(this.activite);
//     this.toggleActiviteForm();
//   }

//   toggleActiviteForm() {
//     this.activite = new Activite(0, '', '', [], '', 0);
//     this.showActiviteForm = !this.showActiviteForm;
//   }

//   handlePhotoUpload(event: any) {
//     const files = event.target.files;
//     const photos: any[] = [];
//     for (let i = 0; i < files.length; i++) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         photos.push(e.target.result);
//       };
//       reader.readAsDataURL(files[i]);
//     }
//     this.activite.photos = photos;
//   }

//   supprimerPhoto(i: number, j: number) {
//     const activitesArray = this.guideForm.get('activites')?.value as Activite[];
//     activitesArray[i].photos.splice(j, 1);
//     this.guideForm.get('activites')?.setValue(activitesArray);
//     console.log(this.guideForm.value.activites);
//   }
}
