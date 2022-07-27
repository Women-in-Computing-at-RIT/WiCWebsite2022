import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  slides = ['http://women.rit.edu/img/afterhours/afterhours3.jpeg','http://women.rit.edu/img/afterhours/afterhours5.jpeg']
  constructor() { }
}
