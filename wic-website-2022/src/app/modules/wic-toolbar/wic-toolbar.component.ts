import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import Button from './models/toolbar-button.model';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-wic-toolbar',
  templateUrl: './wic-toolbar.component.html',
  styleUrls: ['./wic-toolbar.component.scss'],
})
export class WicToolbarComponent implements OnInit {
  isMobile = false;
  maxWidth = 790;
  @ViewChild('drawer') sidebar?: MatSidenav;

  toolbarButtons: Button[] = [
    {
      text: 'home',
      links: [{ link: '/', text: '' }],
    },
    {
      text: 'about',
      links: [
        { link: 'mission', text: 'mission' },
        { link: 'faq', text: 'faq' },
        { link: 'alumni', text: 'alumni' },
        { link: 'scholarships', text: 'scholarships' },
        { link: 'tutoring', text: 'tutoring' }, // TODO: move from this menu later?
      ],
    },
    {
      text: 'events',
      links: [
        { link: 'afterhours', text: 'after hours' },
        { link: 'calendar', text: 'upcoming calendar' },
        { link: 'wichacks', text: 'wichacks' },
        { link: 'annualevents', text: 'annual events' },
      ],
    },
    {
      text: 'committees',
      links: [
        { link: 'committeeheads', text: 'committee heads' },
        { link: 'projects', text: 'projects' },
        { link: 'allies', text: 'allies' },
        { link: 'outreach', text: 'outreach' },
      ],
    },
    {
      text: 'blog',
      links: [{ link: 'blog', text: '' }],
    },
    {
      text: 'sponsor',
      links: [{ link: 'sponsor', text: '' }],
    },
    {
      text: 'contact us',
      links: [{ link: 'contact', text: '' }],
    },
  ];

  constructor(private router: Router) {}

  goToLink(link: string) {
    this.router.navigate([`/${link}`]);
  }

  ngOnInit() {
    this.checkWidth(window);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWidth(event);
  }

  checkWidth(event: any) {
    const width = event?.target?.innerWidth || event?.innerWidth;
    this.isMobile = this.maxWidth > width;
    if (!this.isMobile) {
      this.sidebar?.close();
    }
  }
}
