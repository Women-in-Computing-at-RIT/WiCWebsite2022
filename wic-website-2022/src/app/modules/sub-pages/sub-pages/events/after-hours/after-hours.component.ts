import { Component, OnInit } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-after-hours',
  templateUrl: './after-hours.component.html',
  styleUrls: ['./after-hours.component.scss']
})
export class AfterHoursComponent implements OnInit {

  // @TODO: Student story
  imgCount = 5
  slides: string[] = []
  readonly assetLink = '../../../../../../assets/afterhours';
  links: Link[] = [
    {
      text: 'FAQ',
      link: 'http://women.rit.edu/pdfs/2020FAQWiCOvernight.pdf'
    },
    {
      text: 'Tentative Schedule',
      link: 'http://women.rit.edu/pdfs/Tentative_Schedule20.pdf'
    },
    {
      text: 'Packing List',
      link: 'http://women.rit.edu/pdfs/PackingList.pdf'
    },
    {
      text: 'Campus Map',
      link: 'https://maps.rit.edu/'
    },
  ]

  ngOnInit(): void {
    for (let i = 1; i < this.imgCount + 1; i++) {
      this.slides.push(`${this.assetLink}${i}.jpeg`)
    }
  }
}
