import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { WicHeaderComponent } from './wic-header.component';

@NgModule({
  declarations: [WicHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [WicHeaderComponent]
})
export class WicHeaderModule { }
