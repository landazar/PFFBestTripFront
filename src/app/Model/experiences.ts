import { Activite } from "./activite";

export class Experiences {

    idExperience:number;
    nom:string;
    dateDebut:Date;
    dateFin:Date;
    type:string;
    estApprouvee:boolean;
    activites: Activite[];

    constructor(idExperience:number, nom:string, dateDebut:Date, dateFin:Date, type:string, estApprouvee:boolean, activites: Activite[]) {
        this.idExperience = idExperience;
        this.nom = nom;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.type = type;
        this.estApprouvee = estApprouvee;
        this.activites = activites;
    }
}
