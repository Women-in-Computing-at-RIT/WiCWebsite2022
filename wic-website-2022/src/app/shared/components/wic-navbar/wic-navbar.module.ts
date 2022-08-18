import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WicNavbarComponent } from './wic-navbar/wic-navbar.component';
import { WicHeaderModule } from '../wic-header/wic-header.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    WicNavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WicHeaderModule,
  ],
  exports : [WicNavbarComponent]
})
export class WicNavbarModule { }
