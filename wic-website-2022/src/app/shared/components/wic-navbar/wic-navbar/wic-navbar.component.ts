import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-wic-navbar',
  templateUrl: './wic-navbar.component.html',
  styleUrls: ['./wic-navbar.component.scss']
})
export class WicNavbarComponent {
  @Input() links: Link[] = []
  @Input() title: string = '';

  constructor(private router: Router) {
  }

  selectedLink(link: Link): string {
    return (this.router.url.includes(link.link)) ? 'selected' : '';
  }
}
