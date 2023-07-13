import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiences } from 'src/app/Model/experiences';
import { ExperiencesService } from 'src/app/Service/experiences.service';

@Component({
  selector: 'app-liste-experiences',
  templateUrl: './liste-experiences.component.html',
  styleUrls: ['./liste-experiences.component.css']
})
export class ListeExperiencesComponent implements OnInit {

  listeExperiences!:Experiences[];
  listeExperiencesApprouvees!:Experiences[];
  listeExperiencesNonApprouvees!:Experiences[];
  currentExperiencesList: Experiences[] = [];

  type: string = "";
  param: boolean = false;

  constructor(private es:ExperiencesService, private ar:ActivatedRoute, private router:Router) {
    this.type = ar.snapshot.params["type"];
  }

  ngOnInit(): void {
    this.getAllExperiences(this.type);
    
  }
  

  getAllExperiences(type: string) {
    this.es.listeExperiences(type).subscribe((listeExperiences: Experiences[]) => {
      this.listeExperiences = listeExperiences;
      this.listeExperiencesApprouvees = listeExperiences.filter((value) => value.estApprouvee);
      this.listeExperiencesNonApprouvees = listeExperiences.filter((value) => !value.estApprouvee);
      this.currentExperiencesList = this.listeExperiencesApprouvees;
    });
  }
  

  toggleExperiencesList() {
    this.currentExperiencesList =
      this.currentExperiencesList === this.listeExperiencesApprouvees
        ? this.listeExperiencesNonApprouvees
        : this.listeExperiencesApprouvees;
  }
  doesExperienceExist(type: string) {
    this.es.doesExperienceExist(type).subscribe((result: boolean) => {
      this.param = result;
    });
  }


  deleteExperiences(idExperience:number)
  {
    this.es.deleteExperiences(idExperience).subscribe(() => {
      this.getAllExperiences("undefined");
    });
  }

  updateExperiences(idExperience:number)
  {
    this.router.navigateByUrl("updateExperiences/" + idExperience);
  }

  detailsExperiences(idExperience: number): void {

    this.router.navigateByUrl("getExperiences/"+idExperience);
  }

  approuverExperiences(idExperience:number) {
    this.es.approuverExperiences(idExperience).subscribe(() => {
      this.getAllExperiences(this.type);
    })
  }
}
