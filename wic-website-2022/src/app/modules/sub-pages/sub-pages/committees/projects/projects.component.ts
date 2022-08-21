import { Component } from '@angular/core';
import { WicSummaryListItem } from '@app/shared/components/wic-summary-list/wic-summary-list/wic-summary-list.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  list: WicSummaryListItem[] = [];
  constructor() { }
}
