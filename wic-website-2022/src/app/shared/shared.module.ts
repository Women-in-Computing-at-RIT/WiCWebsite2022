import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
  ],
})
export class SharedModule { }
