import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormulaireUtilisateurComponent } from './formulaire-utilisateur/formulaire-utilisateur.component';

import { ListeExperiencesComponent } from './experiencesComponent/liste-experiences/liste-experiences.component';
import { GuideVoyageComponent } from './guide-voyage/guide-voyage.component';
import { UpdateExperiencesComponent } from './experiencesComponent/update-experiences/update-experiences.component';
import { AfficherGuideVoyageComponent } from './guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';
import { AjoutExperiencesComponent } from './experiencesComponent/ajout-experiences/ajout-experiences.component';
import { PaysComponent } from './pays/pays.component';
import { UpdatePaysComponent } from './pays/update-pays/update-pays.component';
import { CreerPaysComponent } from './pays/creer-pays/creer-pays.component';
import { MenuComponent } from './menu/menu.component';
import { AjoutGuideVoyageComponent } from './guide-voyage/ajout-guide-voyage/ajout-guide-voyage.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CreerVilleComponent } from './ville/creer-ville/creer-ville.component';
import { VilleComponent } from './ville/ville.component';
import { UpdateVilleComponent } from './ville/update-ville/update-ville.component';
import { DetailPaysComponent } from './pays/detail-pays/detail-pays.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { ModifierGuideVoyageComponent } from './guide-voyage/modifier-guide-voyage/modifier-guide-voyage.component';
import { DetailsGuideComponent } from './guide-voyage/details-guide/details-guide.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { FooterComponent } from './footer/footer.component';

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
