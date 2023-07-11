import { Activite } from "./activite";

export class GuideVoyage {
    idGuide: number;
    nom: string;
    dateCreation: string;
    description: string;
    activites: Activite[];
  
    constructor(idGuide: number, nom: string, dateCreation: string, description: string, activites: Activite[]) {
      this.idGuide = idGuide;
      this.nom = nom;
      this.dateCreation = dateCreation;
      this.description = description;
      this.activites = activites;
    }
  }
  