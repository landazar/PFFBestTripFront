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

  /**
   * Au moment de l'initialisation, récupère une liste des expériences
   */
  ngOnInit(): void {
    this.getAllExperiences(this.type);
    this.doesExperienceExist(this.type);
  }
  
  /**
   * Fonction qui permet de récupérer les expériences d'un type donné
   * @param type : type des expériences à récupérer
   */
  getAllExperiences(type: string) {
    this.es.listeExperiences(type).subscribe((listeExperiences: Experiences[]) => {
      this.listeExperiences = listeExperiences;
      this.listeExperiencesApprouvees = listeExperiences.filter((value) => value.estApprouvee);
      this.listeExperiencesNonApprouvees = listeExperiences.filter((value) => !value.estApprouvee);
      this.currentExperiencesList = this.listeExperiencesApprouvees;
    });
  }
  
  /**
   * Fonction qui permet de basculer entre les expériences approuvées et les expériences non approuvées
   */
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

  /**
   * Fonction qui permet de supprimer une expérience
   * @param idExperience : identifiant de l'expérience à supprimer
   */
  deleteExperiences(idExperience:number)
  {
    this.es.deleteExperiences(idExperience).subscribe(() => {
      this.getAllExperiences("undefined");
    });
  }

  /**
   * Fonction qui dirige vers une page permettant de modifier une expérience
   * @param idExperience : identifiant de l'expérience à modifier
   */
  updateExperiences(idExperience:number)
  {
    this.router.navigateByUrl("updateExperiences/" + idExperience);
  }

  /**
   * Fonction qui dirige vers une page permettant d'afficher une expérience
   * @param idExperience : identifiant de l'expérience à afficher
   */
  detailsExperiences(idExperience: number): void {
    this.router.navigateByUrl("getExperiences/"+idExperience);
  }

  /**
   * Fonction qui permet d'approuver une expérience
   * @param idExperience : identifiant de l'expérience à approuver
   */
  approuverExperiences(idExperience:number) {
    this.es.approuverExperiences(idExperience).subscribe(() => {
      this.getAllExperiences(this.type);
    })
  }
}
