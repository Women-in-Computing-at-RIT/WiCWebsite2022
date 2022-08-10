import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '@app/shared/components/carousel/carousel.module';
import { EventListItemModule } from '@app/shared/components/event-list-item/event-list-item/event-list-item.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    EventListItemModule,
    CarouselModule,
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent]
})
export class HomePageModule { }
