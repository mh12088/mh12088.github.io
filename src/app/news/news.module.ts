import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NewsComponent } from './news.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [NewsComponent], 
})
export class NewsModule { }
