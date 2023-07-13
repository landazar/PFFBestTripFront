import { Activite } from "./activite";
import { Utilisateur } from "./utilisateur.model";

export class GuideVoyage {
    idGuide: number;
    nom: string;
    dateCreation: string;
    description: string;
    activites: Activite[];
    //listeU:Utilisateur[];
  
    constructor(idGuide: number, nom: string, dateCreation: string, description: string, activites: Activite[]) {
      this.idGuide = idGuide;
      this.nom = nom;
      this.dateCreation = dateCreation;
      this.description = description;
      this.activites = activites;
      //this.listeU=listeU;
    }
  }
  