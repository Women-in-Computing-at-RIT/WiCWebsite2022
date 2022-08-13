import { Component, Input, OnInit } from '@angular/core';
import { EventListItem } from '../models/list.model';
import { DAY_TO_MS } from '@app/shared/helpers/constants';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.html',
  styleUrls: ['./event-list-item.scss']
})
export class EventListItemComponent implements OnInit {
  @Input() event!: EventListItem;
  timeText: string = 'shortTime';

  readonly locationIcon = "place"
  readonly linkIcon = "Open_in_New"

  constructor() { }

  ngOnInit(): void {
    const isMultipleDays = this.event.end.getTime() - this.event.start.getTime() > DAY_TO_MS;
    this.timeText = isMultipleDays ? 'medium' : 'shortTime';
  }
}
