import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './../app/contact/contact.component';

import { ContactService } from './../app/contact/contact.service';

@NgModule({
    imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ContactComponent ],
  bootstrap: [AppComponent],
  providers: [ContactService ]
})
export class AppModule { }
