import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule
  ],
  declarations: [MenuButtonComponent],
  exports: [MenuButtonComponent]
})
export class MenuButtonModule { }
