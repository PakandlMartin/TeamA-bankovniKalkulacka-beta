import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormCalculationComponent } from './form-calculation/form-calculation.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { FormContactComponent } from './form-contact/form-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormCalculationComponent,
    FormDetailsComponent,
    FormContactComponent
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
