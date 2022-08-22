import { Component } from '@angular/core';
import { COMMITTEEHEADS } from './committee-heads-list';

@Component({
  selector: 'app-committee-heads',  // @DARLENE this is what you would place in the html outside of this component
  templateUrl: './committee-heads.component.html',
  styleUrls: ['./committee-heads.component.scss']
})

export class CommitteeHeadsComponent {

  committeeHeads = COMMITTEEHEADS;

  constructor() { }

}
