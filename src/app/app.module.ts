import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListeExperiencesComponent } from './experiencesComponent/liste-experiences/liste-experiences.component';
import { GuideVoyageComponent } from './guide-voyage/guide-voyage.component';
import { AfficherGuideVoyageComponent } from './guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';
import { AjoutExperiencesComponent } from './experiencesComponent/ajout-experiences/ajout-experiences.component';
import { PaysComponent } from './pays/pays.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import { CreerPaysComponent } from './creer-pays/creer-pays.component';
import { VilleComponent } from './ville/ville.component';
import { UpdateVilleComponent } from './update-ville/update-ville.component';
import { CreerVilleComponent } from './creer-ville/creer-ville.component';

@NgModule({
  declarations: [
    AppComponent,

    GuideVoyageComponent,
    AfficherGuideVoyageComponent
    AjoutExperiencesComponent,
    ListeExperiencesComponent,
    GuideVoyageComponent,
    PaysComponent,
    UpdatePaysComponent,
    CreerPaysComponent,
    VilleComponent,
    UpdateVilleComponent,
    CreerVilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
