import { Ville } from "./ville.model";

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
