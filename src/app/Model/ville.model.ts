import { Pays } from "./pays.model";

export class Ville {

    id: number;
	nom: string;
    pays: Pays;

    constructor(id: number, nom: string, pays: Pays) {
        this.id = id;
        this.nom = nom;
        this.pays=pays;
    }
}
