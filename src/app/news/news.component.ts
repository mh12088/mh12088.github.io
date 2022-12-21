import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, Subscription, tap } from 'rxjs';
import { MockDataService } from 'src/service/mock-data.service';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {
  news: any;
  page: number = 1;
  categorySub = new Subscription;
  searchSub = new Subscription;
  latestNewsSub = new Subscription;
  constructor(
    private newsService: NewsService,
    private router: Router,
    private elementRef: ElementRef,
    private mockDataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.latestNewsSub = this.newsService.latestNews$.subscribe(
      () => {
        this.newsService.fetchLatestNews()
          .pipe(
            tap(data => this.page = 1),
            catchError(() => {
              return this.mockDataService.getLatestNewsMockData();
            })
          )
          .subscribe(data => {
            this.news = data.news;
          },
          )
      }
    )

    this.categorySub = this.newsService.category$.subscribe(
      (category: string) => {
        if (category) {
          this.search({ category });
        }
      }
    )
    this.searchSub = this.newsService.search$.subscribe(
      (queryString: string) => {
        if (queryString) {
          this.search({ queryString })
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.categorySub?.unsubscribe();
    this.searchSub?.unsubscribe();
    this.latestNewsSub?.unsubscribe();
  }

  search(params: any) {
    this.newsService.search(
      params
    )
      .pipe(
        tap(data => this.page = 1),
        catchError(() => {
          const { category, queryString } = params;
          if (category) {
            return this.mockDataService
              .getCategoryMockData()
              .pipe(
                map((data: any) => {
                  return {
                    news: data?.news?.filter((item: any) => item?.category?.includes(category))
                  }
                })
              )
          }
          if (queryString) {
            let upperQueryString = queryString.toUpperCase();
            return this.mockDataService
              .getLatestNewsMockData()
              .pipe(
                map((data: any) => {
                  return {
                    news: data?.news?.filter((item: any) => {
                      let upperTitle = item?.title?.toUpperCase();
                      let upperDesc = item?.description?.toUpperCase();
                      return upperTitle?.includes(upperQueryString) || upperDesc?.includes(upperQueryString);
                    })
                  }
                })
              )
          }
          return of([]);
        })
      )
      .subscribe(data => {
        this.news = data.news;
      });
  }

  goToDetailPage(selectedNews: any) {
    this.newsService.saveSelectedNews(selectedNews);
    this.router.navigate(['news-detail'], selectedNews);
  }

  backToTop() {
    const body = this.elementRef.nativeElement.closest('body');
    body.scrollIntoView({ behavior: 'smooth' });
  }

}
