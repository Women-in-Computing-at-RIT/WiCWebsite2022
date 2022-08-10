import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WicToolBarModule } from './modules/wic-toolbar/wic-toolbar.module';
import { HomePageModule } from './modules/wic-toolbar/home-page/home-page.module';

@NgModule({
  declarations: [		
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WicToolBarModule,
    BrowserAnimationsModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
