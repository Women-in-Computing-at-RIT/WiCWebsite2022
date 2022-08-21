import { Component } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-committee-links',
  template: `
  <app-wic-navbar [links]="links" title="About"></app-wic-navbar>
  `
})
export class CommitteeLinksComponent {
  links = [
    //new Link('Committee Heads', '/mission', true),
    new Link('Projects', '/projects', true),
    new Link('Allies', '/allies', true),
    new Link('Outreach', '/outreach', true),
  ]
}
