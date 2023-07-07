import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from '../Model/pays.model';
import { Observable } from 'rxjs/internal/Observable';
import { PaysService } from '../Service/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  constructor(private ps:PaysService, private route:Router) {}

  listePays!:Observable<Pays[]>;

  ngOnInit(): void {
    this.listePays = this.ps.findAllPays();
  }

  supprimer(id:number)
  {
    this.ps.supprimerPays(id).subscribe();
    this.route.navigateByUrl("pays");
  }

  getPaysById(id:number)
  {
    this.route.navigateByUrl("updatePays/" + id);
  }

}
