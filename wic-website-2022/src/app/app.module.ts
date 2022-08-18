import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './modules/home-page/home-page.module';
import { SubPagesModule } from './modules/sub-pages/sub-pages.module';
import { WicToolBarModule } from './modules/wic-toolbar/wic-toolbar.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [		
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    SubPagesModule, 
    WicToolBarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
