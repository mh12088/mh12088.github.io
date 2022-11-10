import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news-detail', component: NewsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
