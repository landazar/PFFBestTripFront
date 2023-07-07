import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExperiencesComponent } from './experiences/experiences.component';
import { GuideVoyageComponent } from './guide-voyage/guide-voyage.component';
import { AfficherGuideVoyageComponent } from './guide-voyage/afficher-guide-voyage/afficher-guide-voyage.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    GuideVoyageComponent,
    AfficherGuideVoyageComponent
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
