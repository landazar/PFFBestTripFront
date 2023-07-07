import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutExperiencesComponent } from './experiencesComponent/ajout-experiences/ajout-experiences.component';
import { ListeExperiencesComponent } from './experiencesComponent/liste-experiences/liste-experiences.component';
import { AfficherGuideVoyageComponent } from './guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';

const routes: Routes = [
  {path: "saveExperiences", component: AjoutExperiencesComponent},
  {path: "listeExperiences", component: ListeExperiencesComponent},
  { path: 'afficher-guide-voyage', component: AfficherGuideVoyageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
