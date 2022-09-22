import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
user-form
import { UserFormComponent } from './user-form/user-form.component';

import {HeaderComponent} from "./header/header.component";
import {DetailsComponent} from "./details/details.component";
main

@NgModule({
  declarations: [
    AppComponent,
user-form
    UserFormComponent

    HeaderComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
