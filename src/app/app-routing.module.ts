import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutExperiencesComponent } from './experiencesComponent/ajout-experiences/ajout-experiences.component';
import { ListeExperiencesComponent } from './experiencesComponent/liste-experiences/liste-experiences.component';
import { PaysComponent } from './pays/pays.component';
import { CreerPaysComponent } from './pays/creer-pays/creer-pays.component';
import { UpdatePaysComponent } from './pays/update-pays/update-pays.component';
import { VilleComponent } from './ville/ville.component';
import { CreerVilleComponent } from './ville/creer-ville/creer-ville.component';
import { UpdateVilleComponent } from './ville/update-ville/update-ville.component';

const routes: Routes = [
  {path: "saveExperiences", component: AjoutExperiencesComponent},
  {path: "listeExperiences", component: ListeExperiencesComponent},
  {path: "listePays", component: PaysComponent},
  {path: "ajoutPays", component: CreerPaysComponent},
  {path: "modifierPays", component: UpdatePaysComponent},
  {path: "listeVille", component: VilleComponent},
  {path: "ajoutVille", component: CreerVilleComponent},
  {path: "modifierVille", component: UpdateVilleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
