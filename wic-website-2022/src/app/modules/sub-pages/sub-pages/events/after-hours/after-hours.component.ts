import { Component } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

@Component({
  selector: 'app-after-hours',
  templateUrl: './after-hours.component.html',
  styleUrls: ['./after-hours.component.scss']
})
export class AfterHoursComponent {
  // slides: string[] = ['afterhours1.jpeg'];
  slides: string[] = ['../../../../../../assets/afterhours1.jpeg'];
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

}
