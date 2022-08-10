import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Input() title: string = "";
  @Input() links: Link[] = [];

  constructor(private router: Router) {}

  goToLink(link: string) {
    this.router.navigate([`/${link}`]);
  }

}
