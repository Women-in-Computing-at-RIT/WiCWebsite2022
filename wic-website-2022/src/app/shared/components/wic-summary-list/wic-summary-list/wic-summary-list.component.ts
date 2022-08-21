import { Component, Input } from '@angular/core';
import Link from '@app/shared/models/inputs/link';

export interface WicSummaryListItem {
  info: [
    {
      title: string;
      summary: string;
    }
  ]
  img?: string;
  link?: Link;
  linkText?: string;
}

@Component({
  selector: 'app-wic-summary-list',
  templateUrl: './wic-summary-list.component.html',
  styleUrls: ['./wic-summary-list.component.scss']
})
export class WicSummaryListComponent {
  @Input() list: WicSummaryListItem[] = [];

  constructor() { }
}
