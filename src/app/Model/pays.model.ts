import { Ville } from "./ville.model";
// Classe pays avec les attributs de la classe
export class Pays {

    id: number;
	nom: string;
    villes!: Ville[];

    constructor(id: number, nom: string, villes: Ville[]) {
        this.id = id;
        this.nom = nom;
        this.villes;
    }
}
