import { Component } from '@angular/core';
import { UtilisateurService } from 'src/app/Service/utilisateur.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  constructor(private us:UtilisateurService) {}

  listeString!:string[];

  //Fonction a mettre dans le js
sendMail() {
  this.us.getEmailByEstAbonne().subscribe(listeString => 
    {
      this.listeString=listeString;
      console.log("Liste email :" + listeString);
      var url="mailto:" + this.listeString //Ajouter les mails de tous les abonnés
      +"?subject=Newsletter BestTrip"
      +"&body=Voici le lien pour accéder à la Newsletter : http://localhost:4200/newsletter";
      //Ouvrir client messagerie-->
      document.location=url;
    })
  //Encoder l'url mailto
  //console.log(this.listeString);
  
  
  
}



}
