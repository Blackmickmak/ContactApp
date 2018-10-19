/// <reference path="search/search.pipe.ts" />
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './../app/contact/contact.component';
import { LocateComponent } from './../app/locate/locate.component';
import { ExcelReaderComponent } from './../app/excelreader/excelreader.component';
import { ContactService } from './../app/contact/contact.service';
import { FilterPipe } from './search/search.pipe';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, ContactComponent, LocateComponent, ExcelReaderComponent, FilterPipe],
  bootstrap: [AppComponent],
  providers: [ContactService]
})
export class AppModule { }
