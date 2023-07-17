import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutExperiencesComponent } from './components/experiencesComponent/ajout-experiences/ajout-experiences.component';
import { ListeExperiencesComponent } from './components/experiencesComponent/liste-experiences/liste-experiences.component';
import { PaysComponent } from './components/pays/pays.component';
import { CreerPaysComponent } from './components/pays/creer-pays/creer-pays.component';
import { UpdatePaysComponent } from './components/pays/update-pays/update-pays.component';
import { VilleComponent } from './components/ville/ville.component';
import { CreerVilleComponent } from './components/ville/creer-ville/creer-ville.component';
import { UpdateVilleComponent } from './components/ville/update-ville/update-ville.component';
import { AfficherGuideVoyageComponent } from './components/guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';
import { UpdateExperiencesComponent } from './components/experiencesComponent/update-experiences/update-experiences.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { FormulaireUtilisateurComponent } from './components/formulaire-utilisateur/formulaire-utilisateur.component';
import { AjoutGuideVoyageComponent } from './components/guide-voyage/ajout-guide-voyage/ajout-guide-voyage.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { UpdateUtilisateurComponent } from './components/update-utilisateur/update-utilisateur.component';
import { ModifierGuideVoyageComponent } from './components/guide-voyage/modifier-guide-voyage/modifier-guide-voyage.component';
import { DetailsGuideComponent } from './components/guide-voyage/details-guide/details-guide.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HeaderPagesComponent } from './components/header-pages/header-pages.component';
import { DetailsExperiencesComponent } from './components/experiencesComponent/details-experiences/details-experiences.component';
import { AboutUsComponent } from './components/footerPages/about-us/about-us.component';
import { ContactComponent } from './components/footerPages/contact/contact.component';
import { HelpComponent } from './components/footerPages/help/help.component';

const routes: Routes = [
  {path: "saveExperiences", component: AjoutExperiencesComponent},
  {path: "listeExperiences", component: ListeExperiencesComponent},
  {path: "updateExperiences/:idExperience", component: UpdateExperiencesComponent},
  {path: 'getExperiences/:idExperience',component: DetailsExperiencesComponent},
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
  {path: "updateUtilisateur/:id", component: UpdateUtilisateurComponent},
  {path: 'ajouter-guide-voyage', component: AjoutGuideVoyageComponent },
  {path: 'modifier-guide-voyage/:idGuide',component: ModifierGuideVoyageComponent},
  {path: 'details-guide-voyage/:idGuide',component: DetailsGuideComponent},

  {path: "updateExperiences/:idExperience", component: UpdateExperiencesComponent},
  {path: "", component: AcceuilComponent},
  {path: "newsletter", component: NewsletterComponent},

  {path: "afficher-guide-voyage/:destination", component: AfficherGuideVoyageComponent},

  {path: "heading", component:HeaderPagesComponent},
  {path: "listeExperiences/:type", component: ListeExperiencesComponent},

  {path: "aboutUs", component: AboutUsComponent},
  {path: "contact", component: ContactComponent},
  {path: "help", component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
