import { Component, Input } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-wic-navbar',
  templateUrl: './wic-navbar.component.html',
  styleUrls: ['./wic-navbar.component.scss']
})
export class WicNavbarComponent {
  @Input() links: Link[] = []
  @Input() title: string = '';

  /**@TODO 
   * if title matches link have the title be bolded and purble
   *
   */
  constructor() {

  }
}
