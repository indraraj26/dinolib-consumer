import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DinotableModule } from 'dinotable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinotableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
