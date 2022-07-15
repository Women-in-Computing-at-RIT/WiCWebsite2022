import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WicToolbarComponent } from './wic-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu'; 

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
  ],
  declarations: [WicToolbarComponent]
})
export class ToolBarModule { }
