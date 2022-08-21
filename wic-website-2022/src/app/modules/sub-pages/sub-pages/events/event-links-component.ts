import { Component, OnInit } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-event-links',
  template: `
  <app-wic-navbar [links]="links" title="Events"></app-wic-navbar>
  `
})
export class EventLinksComponent {
  links = [
    new Link('After Hours', '/afterhours', true),
    new Link('Upcoming Calendar', '/calendar', true),
    new Link('WiCHacks', '/wichacks', true),
    new Link('Annual Events', '/annualevents', true),
  ]
}