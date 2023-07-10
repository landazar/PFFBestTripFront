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
import { AfficherGuideVoyageComponent } from './guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';
import { UpdateExperiencesComponent } from './experiencesComponent/update-experiences/update-experiences.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';
import { AjoutGuideVoyageComponent } from './guide-voyage/ajout-guide-voyage/ajout-guide-voyage.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path: "saveExperiences", component: AjoutExperiencesComponent},
  {path: "listeExperiences", component: ListeExperiencesComponent},
  {path: "listePays", component: PaysComponent},
  {path: "ajoutPays", component: CreerPaysComponent},
  {path: "modifierPays/:id", component: UpdatePaysComponent},
  {path: "listeVille", component: VilleComponent},
  {path: "ajoutVille", component: CreerVilleComponent},
  {path: "modifierVille/:id", component: UpdateVilleComponent},
  {path: 'afficher-guide-voyage', component: AfficherGuideVoyageComponent },
  {path: "updateExperiences/:idExperience", component: UpdateExperiencesComponent},
  {path: "utilisateur", component:UtilisateurComponent},
  {path: "ajoutUtilisateur", component:FormulaireUtilisateurComponent},
  {path: 'ajouter-guide-voyage', component: AjoutGuideVoyageComponent },
  {path: "updateExperiences/:idExperience", component: UpdateExperiencesComponent},
  {path: "", component: AcceuilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
