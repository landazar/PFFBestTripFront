import { Activite } from "./activite";

export class Lieu extends Activite {
    type: string;
    '@class': string;

    constructor(id: number, nom: string, commentaire: string, photos: string[], videos: string, depense: number, type: string) {
        super(id, nom, commentaire, photos, videos, depense);
        this.type = type;
        this['@class'] = 'com.inti.model.Lieu';
      }
}