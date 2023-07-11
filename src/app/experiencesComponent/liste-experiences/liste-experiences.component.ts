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

  constructor(private es:ExperiencesService, private ar:ActivatedRoute, private router:Router) {
    console.log("url : " + ar.snapshot.url)
  }

  ngOnInit(): void {
    this.getAllExperiences();
  }

  getAllExperiences() {
    this.es.listeExperiences().subscribe((listeExperiences: Experiences[]) => {
      this.listeExperiences = listeExperiences;
    });
  }

  deleteExperiences(idExperience:number)
  {
    this.es.deleteExperiences(idExperience).subscribe(() => {
      this.getAllExperiences();
    });
  }

  updateExperiences(idExperience:number)
  {
    this.router.navigateByUrl("updateExperiences/" + idExperience);
  }
}
