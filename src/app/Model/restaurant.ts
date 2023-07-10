import { Activite } from "./activite";

export class Restaurant extends Activite {
  type: string;
  adresse: string;
  '@class': string;

  constructor(id: number, nom: string, commentaire: string, photos: string[], videos: string, depense: number, type: string, adresse: string) {
    super(id, nom, commentaire, photos, videos, depense);
    this.type = type;
    this.adresse = adresse;
    this['@class'] = 'com.inti.model.Restaurant';
  }
}
