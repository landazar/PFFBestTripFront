import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { FormulaireUtilisateurComponent } from './components/formulaire-utilisateur/formulaire-utilisateur.component';

import { ListeExperiencesComponent } from './components/experiencesComponent/liste-experiences/liste-experiences.component';
import { GuideVoyageComponent } from './components/guide-voyage/guide-voyage.component';
import { UpdateExperiencesComponent } from './components/experiencesComponent/update-experiences/update-experiences.component';
import { AfficherGuideVoyageComponent } from './components/guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';
import { AjoutExperiencesComponent } from './components/experiencesComponent/ajout-experiences/ajout-experiences.component';
import { PaysComponent } from './components/pays/pays.component';
import { UpdatePaysComponent } from './components/pays/update-pays/update-pays.component';
import { CreerPaysComponent } from './components/pays/creer-pays/creer-pays.component';
import { MenuComponent } from './components/menu/menu.component';
import { AjoutGuideVoyageComponent } from './components/guide-voyage/ajout-guide-voyage/ajout-guide-voyage.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CreerVilleComponent } from './components/ville/creer-ville/creer-ville.component';
import { VilleComponent } from './components/ville/ville.component';
import { UpdateVilleComponent } from './components/ville/update-ville/update-ville.component';
import { DetailPaysComponent } from './components/pays/detail-pays/detail-pays.component';
import { UpdateUtilisateurComponent } from './components/update-utilisateur/update-utilisateur.component';
import { ModifierGuideVoyageComponent } from './components/guide-voyage/modifier-guide-voyage/modifier-guide-voyage.component';
import { DetailsGuideComponent } from './components/guide-voyage/details-guide/details-guide.component';
import { DetailsExperiencesComponent } from './components/experiencesComponent/details-experiences/details-experiences.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HeaderPagesComponent } from './components/header-pages/header-pages.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/footerPages/about-us/about-us.component';
import { ContactComponent } from './components/footerPages/contact/contact.component';
import { HelpComponent } from './components/footerPages/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    FormulaireUtilisateurComponent,
    GuideVoyageComponent,
    AfficherGuideVoyageComponent,
    AjoutExperiencesComponent,
    ListeExperiencesComponent,
    GuideVoyageComponent,
    PaysComponent,
    UpdatePaysComponent,
    CreerPaysComponent,
    UpdateExperiencesComponent,
    MenuComponent,
    AjoutGuideVoyageComponent,
    AcceuilComponent,
    VilleComponent,
    CreerVilleComponent,
    UpdateVilleComponent,
    DetailPaysComponent,
    UpdateUtilisateurComponent,
    ModifierGuideVoyageComponent,
    DetailsGuideComponent,
    NewsletterComponent,
    HeaderPagesComponent,
    FooterComponent,
    DetailsExperiencesComponent,
    AboutUsComponent,
    ContactComponent,
    HelpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
