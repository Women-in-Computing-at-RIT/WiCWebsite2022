import { Component, OnInit } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-about-links',
  template: `
  <app-wic-navbar [links]="links" title="About"></app-wic-navbar>
  `
})
export class AboutLinksComponent {
  links = [
    new Link('After Hours', '/mission', true),
    new Link('FAQ', '/faq', true),
    new Link('Alumni', '/alumni', true),
    new Link('Tutoring', '/tutoring', true),
  ]
}