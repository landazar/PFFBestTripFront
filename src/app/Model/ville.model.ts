import { Pays } from "./pays.model";
// Classe ville avec les attributs de la classe
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
