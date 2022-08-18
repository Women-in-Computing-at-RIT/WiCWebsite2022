import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import Button from './models/toolbar-button.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wic-toolbar',
  templateUrl: './wic-toolbar.component.html',
  styleUrls: ['./wic-toolbar.component.scss']
})
export class WicToolbarComponent {

  toolbarButtons: Button[] = [
    {
      text: 'home',
      links: [{link: '/', text: '', }]
    }, {
      text: 'about',
      links: [
        { link: 'mission', text: 'mission' },
        { link: 'faq', text: 'faq' },
        { link: 'alumni', text: 'alumni' },
        { link: 'scholarships', text: 'scholarships' },
        { link: 'tutoring', text: 'tutoring' }, // TODO: move from this menu later?
      ]
    }, {
      text: 'events',
      links: [
        { link: 'afterhours', text: 'after hours' },
        { link: 'calendar', text: 'upcoming calendar' },
        { link: 'wichacks', text: 'wichacks' },
        { link: 'annualevents', text: 'annual events' },
      ]
    }, {
      text: 'committees',
      links: [
        { link: 'committees', text: 'committee heads' },
        { link: 'projects', text: 'projects' },
        { link: 'allies', text: 'allies' },
        { link: 'outreach', text: 'outreach' },
      ]
    },{ 
      text: 'blog', 
      links: [{link: 'blog', text: '', }]
    }, { 
      text: 'sponsor', 
      links: [{link: 'sponsor', text: '', }]
    }, { 
      text: 'contact us', 
      links: [{link: 'contact', text: '', }]
    },
  ]

  constructor(private router: Router) { }

  goToLink(link: string) {
    this.router.navigate([`/${link}`]);
  }

  // ngOnInit() {
  // }

}
