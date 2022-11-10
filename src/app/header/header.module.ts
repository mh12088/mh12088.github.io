import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header.component';
import { CategoryFilterModule } from '../category-filter/category-filter.module';
import { SearchBoxModule } from '../search-box/search-box.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CategoryFilterModule,
    SearchBoxModule
  ],
  exports: [HeaderComponent], 
})
export class HeaderModule { }
