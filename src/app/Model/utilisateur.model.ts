export class Utilisateur {

    id:number;
    username:string;
    mdp:string;
    estAbonne:boolean;
    role:string;
    email:string;
    nom:string;
    prenom:string;
    

    constructor(id:number, username:string, mdp:string, estAbonne:boolean, role:string, email:string, nom:string, prenom:string) 
    {
        this.id=id;
        this.username=username;
        this.mdp=mdp;
        this.estAbonne=estAbonne;
        this.role=role;
        this.email=email;
        this.nom=nom;
        this.prenom=prenom;
    }
}
