import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueryBuilderModule,QueryBuilderConfig } from "angular2-query-builder";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QueryBuilderModule,
    FormsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
