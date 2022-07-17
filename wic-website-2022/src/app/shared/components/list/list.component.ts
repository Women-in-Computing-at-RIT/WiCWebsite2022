import { Component, Input } from '@angular/core';
// import List,ListItem} from '@app/shared/models/inputs/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() list!: List;

  constructor() { }


}
