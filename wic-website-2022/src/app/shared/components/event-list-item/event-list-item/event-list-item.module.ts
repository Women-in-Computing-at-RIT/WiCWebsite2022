import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListItemComponent } from './event-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatIconModule,
    CommonModule,
    MatGridListModule,
  ],
  declarations: [EventListItemComponent],
  exports: [EventListItemComponent]
})
export class EventListItemModule { }
