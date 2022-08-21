import { Component, OnInit } from '@angular/core';
import faq from './faq.json';
import counter from '@app/shared/helpers/counter';
import Image from '@app/shared/models/inputs/image.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  readonly assetLink = '../../../../../../assets/faq';
  imageColCount = 2;
  totalImages = 6;
  questions: any[] = [];
  imageInsert = 3;
  imageLinks = [];

  constructor() {}

  ngOnInit(): void {
    this.questions = faq.questions;
  }

  /**
   * Get image links dynamically
   * @param i index of current faq question
   * @returns images to display
   */
  getImageLinks(i: number): string[] {
    const arry = [];
    const index = Math.abs(i - this.imageInsert) + (i % this.imageColCount);
    for (
      let i = index;
      i < index + this.imageColCount;
      i++
    ) {
      arry.push(`${this.assetLink}${i}.jpeg`);
    }
    return arry;
  }
}
