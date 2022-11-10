import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isActive: boolean = false;

  constructor(
    private elementRef: ElementRef
  ) { }

  backToTop() {
    const body = this.elementRef.nativeElement.closest('body');
    body.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit() {
  }

}
