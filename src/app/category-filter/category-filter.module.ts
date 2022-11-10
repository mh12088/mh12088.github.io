import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { CategoryFilterComponent } from './category-filter.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CategoryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [CategoryFilterComponent], 
})
export class CategoryFilterModule { }
