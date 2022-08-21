import { Component } from '@angular/core';
import events from './annual-events.json';
import { WicSummaryListItem } from '@app/shared/components/wic-summary-list/wic-summary-list/wic-summary-list.component';

@Component({
  selector: 'app-annual-events',
  templateUrl: './annual-events.component.html',
  styleUrls: ['./annual-events.component.scss']
})
export class AnnualEventsComponent {
  eventList: WicSummaryListItem[] = [];
  conferenceList: WicSummaryListItem[] = [];
  constructor() { 
    this.eventList = events.events as WicSummaryListItem[];
    this.conferenceList = events.conferences as WicSummaryListItem[];
  }

}
