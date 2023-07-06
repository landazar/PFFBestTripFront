export class GuideVoyage {
    idGuide: number;
    nom: string;
    dateCreation: string;
    description: string;
  
    constructor(idGuide: number, nom: string, dateCreation: string, description: string) {
      this.idGuide = idGuide;
      this.nom = nom;
      this.dateCreation = dateCreation;
      this.description = description;
    }
  }
  