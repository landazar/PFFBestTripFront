export class Activite {
    id: number;
	nom: string;
	commentaire: string;
	photos: string;
	videos: string;
	depense: number;

    constructor(id: number, nom: string, commentaire: string, photos: string, videos: string, depense: number) {
        this.id = id;
        this.nom = nom;
        this.commentaire = commentaire;
        this.photos = photos;
        this.videos = videos;
        this.depense = depense;
    }
}