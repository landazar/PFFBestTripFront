import { Activite } from "./activite";
import { Utilisateur } from "./utilisateur.model";

export class GuideVoyage {
    idGuide: number;
    nom: string;
    dateCreation: string;
    description: string;
    estApprouve: boolean;
    note: number;
    nbrDeNote: number;
    sommeNoteTot: number;
    activites: Activite[];
    listeU:Utilisateur[];
  

    constructor(idGuide: number, nom: string, dateCreation: string, description: string, estApprouve: boolean, note: number, nbrDeNote: number, sommeNoteTot: number, activites: Activite[], listeU:Utilisateur[]) {
      this.idGuide = idGuide;
      this.nom = nom;
      this.dateCreation = dateCreation;
      this.description = description;
      this.estApprouve = estApprouve;
      this.note = note;
      this.nbrDeNote = nbrDeNote;
      this.sommeNoteTot = sommeNoteTot;
      this.activites = activites;
      this.listeU=listeU;
    }
  }
  