import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pays } from 'src/app/Model/pays.model';
import { Ville } from 'src/app/Model/ville.model';
import { PaysService } from 'src/app/Service/pays.service';
import { VilleService } from 'src/app/Service/ville.service';
import { Observable } from 'rxjs/internal/Observable';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent implements OnInit {
  villeForm!: FormGroup;
  id!: number;
  ville!: Ville;

  paysForm!:FormGroup;
  idPays!:number;
  listePays!:Observable<Pays[]>;
  pays!:Pays;

  constructor(private formBuilder:FormBuilder, private ar:ActivatedRoute, private villeService: VilleService, private ps: PaysService, private route:Router) {
    //On récupere l'id de la ville à modifier
    this.id = ar.snapshot.params["id"];
  }


  // Méthode qui invoke les modification de la page
  ngOnInit(): void {
    //On récupere la liste de tout les pays pour les afficher dans le select partie HTML
    this.listePays = this.ps.findAllPays();
    // console.log(this.listePays.subscribe());


    //On créer un villeForm
    this.villeService.getVilleById (this.id).subscribe(ville => {
      this.villeForm = this.formBuilder.group({
        id: [ville.id],
        nom: [ville.nom],
        pays: this.ps.getPaysById(this.paysForm.value).subscribe(),
      })
    });

   
    // On creer paysForm
      this.ps.getPaysById(this.paysForm.value).subscribe((pays) => {
        this.paysForm = this.formBuilder.group({
          idPays: [pays.id],
        //  nomPays:[pays.nom]
        });
      });
    

    // this.ps.getPaysById(this.ville.pays.id).subscribe();
    
  }

  updateVille() {
    this.villeService.updateVille(this.villeForm.value).subscribe();
    this.route.navigateByUrl("listeVille");
  }
}

