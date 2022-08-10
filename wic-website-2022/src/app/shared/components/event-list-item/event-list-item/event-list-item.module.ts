import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListItemComponent } from './event-list-item.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatIconModule,
    CommonModule
  ],
  declarations: [EventListItemComponent],
  exports: [EventListItemComponent]
})
export class EventListItemModule { }
