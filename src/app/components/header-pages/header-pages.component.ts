import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.css']
})
export class HeaderPagesComponent {
  @Input() pageTitle!: string;
  
}
