import { Activite } from "./activite";

export class Experiences {

    idExperience:number;
    nom:string;
    dateDebut:Date;
    dateFin:Date;
    type:string;
    activites: Activite[];

    constructor(idExperience:number, nom:string, dateDebut:Date, dateFin:Date, type:string, activites: Activite[]) {
        this.idExperience = idExperience;
        this.nom = nom;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.type = type;
        this.activites = activites;
    }
}
