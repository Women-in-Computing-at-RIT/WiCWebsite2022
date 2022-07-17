import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
  ],
  declarations: [ListComponent]
})
export class ListModule { }
