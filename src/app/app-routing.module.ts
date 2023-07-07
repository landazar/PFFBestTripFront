import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutExperiencesComponent } from './experiencesComponent/ajout-experiences/ajout-experiences.component';
import { ListeExperiencesComponent } from './experiencesComponent/liste-experiences/liste-experiences.component';
import { UpdateExperiencesComponent } from './experiencesComponent/update-experiences/update-experiences.component';

const routes: Routes = [
  {path: "saveExperiences", component: AjoutExperiencesComponent},
  {path: "listeExperiences", component: ListeExperiencesComponent},
  {path: "updateExperiences/:idExperience", component: UpdateExperiencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
