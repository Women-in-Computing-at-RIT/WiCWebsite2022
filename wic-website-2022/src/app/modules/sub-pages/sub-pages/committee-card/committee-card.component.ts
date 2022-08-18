import { Component, Input } from '@angular/core';
import { CommitteeHead } from '../committees/committee-heads/committee-head';

@Component({
  selector: 'app-committee-card',
  templateUrl: './committee-card.component.html',
  styleUrls: ['./committee-card.component.scss']
})
export class CommitteeCardComponent {

  @Input() committeeHead!: CommitteeHead;
  //committeeHead? = CommitteeHead;

  constructor() { }

}
