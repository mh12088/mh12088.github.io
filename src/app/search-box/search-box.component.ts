import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  searchValue: string = '';
  queryString: string = '';
  category = new Subscription;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.category = this.newsService.category$.subscribe(
      (category: string) => {
        if (category) {
          this.clearSearchValue();
          this.queryString = category;
        }
      });
  }

  ngOnDestroy(): void {
    this.category?.unsubscribe();
  }

  clearAll() {
    this.queryString = '';
    this.searchValue = '';
  }

  clearSearchValue() {
    this.searchValue = '';
  }

  clearQueryString() {
    this.queryString = '';
  }

  onChange(updatedValue: any): void {
    this.searchValue = updatedValue;
  }

  search() {
    this.queryString = this.searchValue;
    this.clearSearchValue();
    this.newsService.search$.next(this.queryString);
  }

}
