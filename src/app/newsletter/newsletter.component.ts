import { Component } from '@angular/core';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  constructor(private us:UtilisateurService) {}

  getAbonne() {
    return this.us.getEmailByEstAbonne();
  }

  //Fonction a mettre dans le js
sendMail() {
  //Encoder l'url mailto
  var url="mailto:" + this.getAbonne() //Ajouter les mails de tous les abonnés
      +"?subject=Newsletter BestTrip"
      +"&body=Voici le lien pour accéder à la Newsletter : http://localhost:4200/newsletter";
  //Ouvrir client messagerie-->
 document.location=url;
}



}
