import { Component } from '@angular/core';

@Component({
  selector: 'app-wic-header',
  template: `
    <div class="sectionTitle">
      <ng-content></ng-content>
    </div>
    <div class="line"></div>
  `,
})
export class WicHeaderComponent {}
