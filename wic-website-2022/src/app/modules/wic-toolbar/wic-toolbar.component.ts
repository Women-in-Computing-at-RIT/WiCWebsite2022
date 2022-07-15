import { Component, OnInit } from '@angular/core';
import Button from './models/toolbar-button.model';

@Component({
  selector: 'app-wic-toolbar',
  templateUrl: './wic-toolbar.component.html',
  styleUrls: ['./wic-toolbar.component.scss']
})
export class WicToolbarComponent {

  toolbarButtons: Button[] = [
    {
      text: 'home',
      links: ''
    },
    {
      text: 'about',
      links: [
        'mission', 
        'faq', 
        'alumni', 
        'scholarships', 
        'tutoring' // TODO: move from this menu later?
      ]
    },
    {
      text: 'events',
      links: [
        'after hours',
        'upcoming calendar',
        'wichacks',
        'annual events'
      ]
    },
    {
      text: 'committees',
      links: [
        'committee heads',
        'projects',
        'allies',
        'outreach'
      ]
    },
    {
      text: 'blog',
      links: 'blog'
    },
    {
      text: 'sponsor',
      links: 'sponsor'
    },
    {
      text: 'contact us',
      links: 'contact'
    },
  ]

  constructor() { }

  // ngOnInit() {
  // }

}
