import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadFormComponent() {
    this.router.navigate(['/saveExperiences']);
  }

  loadTableComponent() {
    this.router.navigate(['/listeExperiences']);
  }


}
