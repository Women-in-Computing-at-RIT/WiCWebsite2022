import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MatButtonModule,
  ],
  declarations: [
  ],
})
export class SharedModule { }
