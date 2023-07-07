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
import { AjoutGuideVoyageComponent } from './guide-voyage/ajout-guide-voyage/ajout-guide-voyage.component';

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
    AjoutGuideVoyageComponent,
    UpdateExperiencesComponent
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
