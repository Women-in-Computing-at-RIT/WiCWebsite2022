import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WicToolbarComponent } from './wic-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { MenuButtonModule } from '@app/shared/components/menu-button/menu-button.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MenuButtonModule,
    PipesModule,
  ],
  declarations: [WicToolbarComponent],
  exports: [WicToolbarComponent],
})
export class WicToolBarModule { }
