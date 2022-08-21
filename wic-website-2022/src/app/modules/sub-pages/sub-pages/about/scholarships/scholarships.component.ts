import { Component } from '@angular/core';
import { WicSummaryListItem } from '@app/shared/components/wic-summary-list/wic-summary-list/wic-summary-list.component';
import scholarships from './scholarships.json'

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent {
  list: WicSummaryListItem[] = scholarships as WicSummaryListItem[];
}
