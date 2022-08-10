import { Component } from '@angular/core';
import { EventListItem } from '@app/shared/components/event-list-item/models/list.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  slides = ['http://women.rit.edu/img/afterhours/afterhours3.jpeg', 'http://women.rit.edu/img/afterhours/afterhours5.jpeg'];
  event1: EventListItem = new EventListItem("First meeting!", { start: new Date('July 21, 2022 01:15:00'), end: new Date('July 21, 2022 01:17:00') }, 'GOL-2400')
  event2: EventListItem = new EventListItem("Projects", { start: new Date('August 21, 2022 01:15:00'), end: new Date('August 21, 2022 01:17:00') }, 'GOL-2350',undefined, true);
  constructor() { }
}
