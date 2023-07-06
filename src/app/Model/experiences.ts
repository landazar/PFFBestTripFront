export class Experiences {

    idExperience:number;
    nom:string;
    dateDebut:Date;
    dateFin:Date;
    type:string;

    constructor(idExperience:number, nom:string, dateDebut:Date, dateFin:Date, type:string) {
        this.idExperience = idExperience;
        this.nom = nom;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.type = type;
    }
}
