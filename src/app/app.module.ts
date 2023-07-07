import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListeExperiencesComponent } from './experiencesComponent/liste-experiences/liste-experiences.component';
import { GuideVoyageComponent } from './guide-voyage/guide-voyage.component';
import { UpdateExperiencesComponent } from './experiencesComponent/update-experiences/update-experiences.component';
import { AfficherGuideVoyageComponent } from './guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';
import { AjoutExperiencesComponent } from './experiencesComponent/ajout-experiences/ajout-experiences.component';
import { AjoutGuideVoyageComponent } from './guide-voyage/ajout-guide-voyage/ajout-guide-voyage.component';

@NgModule({
  declarations: [
    AppComponent,

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
