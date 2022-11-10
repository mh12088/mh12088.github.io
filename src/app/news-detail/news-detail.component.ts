import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  news: Observable<any> = this.newsService.getSelectedNews();
  subscription = new Subscription;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  };


  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }
}
