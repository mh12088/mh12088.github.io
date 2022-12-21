import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  news: any;
  newsSub = new Subscription;
  constructor(private newsService: NewsService,
    private changeDetectorRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.newsSub = this.newsService.getSelectedNews().subscribe(data => {
      this.news = data;
      this.changeDetectorRef.detectChanges();
    })
  };


  ngOnDestroy(): void {
    this.newsSub?.unsubscribe();
  }
}
