import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { WicHeaderComponent } from './wic-header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [WicHeaderComponent],
  exports: [WicHeaderComponent]
})
export class WicHeaderModule { }
