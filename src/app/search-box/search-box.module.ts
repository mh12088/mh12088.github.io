import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SearchBoxComponent } from './search-box.component';

@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [SearchBoxComponent], 
})
export class SearchBoxModule { }
