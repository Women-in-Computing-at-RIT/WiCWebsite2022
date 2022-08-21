import { Component } from '@angular/core';

@Component({
  selector: 'app-allies',
  templateUrl: './allies.component.html',
  styleUrls: ['./allies.component.scss']
})
export class AlliesComponent {
  totalImages = 2;
  readonly assetLink = '../../../../../../assets/allies'
  images: string[] = [];

  constructor() {
    for (let i = 1; i < this.totalImages + 1; i++) {
      this.images.push(`${this.assetLink}${i}.png`)
    }
    this.images = this.images
  }

}
