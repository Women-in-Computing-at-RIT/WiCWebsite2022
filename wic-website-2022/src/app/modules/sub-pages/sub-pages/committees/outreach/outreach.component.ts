import { Component } from '@angular/core';
import { WicSummaryListItem } from '@app/shared/components/wic-summary-list/wic-summary-list/wic-summary-list.component';
import outreach from './outreach.json'

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.scss']
})
export class OutreachComponent {
  list: WicSummaryListItem[] = [];
  constructor() { 
    this.list = outreach as WicSummaryListItem[];
  }

}
