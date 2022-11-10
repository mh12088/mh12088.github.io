import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { NewsService } from 'src/service/news.service';

@Component({
  selector: 'app-category-filter',

  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  categories = [
    {
      name: "Regional",
      key: "regional",
    },
    {
      name: "Technology",
      key: "technology",
    },
    {
      name: "Lifestyle",
      key: "lifestyle",
    },
    {
      name: "Business",
      key: "business",
    },
    {
      name: "General",
      key: "general",
    },
    {
      name: "Programming",
      key: "programming",
    },
    {
      name: "Science",
      key: "science",
    },
    {
      name: "Entertainment",
      key: "entertainment",
    },
    {
      name: "World",
      key: "world",
    },
    {
      name: "Sports",
      key: "sports",
    },
    {
      name: "Finance",
      key: "finance",
    },
    {
      name: "Academia",
      key: "academia",
    },
    {
      name: "Politics",
      key: "politics",
    },
    {
      name: "Health",
      key: "health",
    },
    {
      name: "Opinion",
      key: "opinion",
    },
    {
      name: "Food",
      key: "food",
    },
    {
      name: "Game",
      key: "game",
    },
    {
      name: "Fashion",
      key: "fashion",
    },
    {
      name: "Academic",
      key: "academic",
    },
    {
      name: "Crap",
      key: "crap",
    },
    {
      name: "Travel",
      key: "travel",
    },
    {
      name: "Culture",
      key: "culture",
    },
    {
      name: "Economy",
      key: "economy",
    },
    {
      name: "Environment",
      key: "environment",
    },
    {
      name: "Art",
      key: "art",
    },
    {
      name: "Music",
      key: "music",
    },
    {
      name: "Notsure",
      key: "notsure",
    },
    {
      name: "CS",
      key: "CS",
    },
    {
      name: "Education",
      key: "education",
    },
    {
      name: "Redundant",
      key: "redundant",
    },
    {
      name: "Television",
      key: "television",
    },
    {
      name: "Commodity",
      key: "commodity",
    },
    {
      name: "Movie",
      key: "movie",
    },
    {
      name: "Entrepreneur",
      key: "entrepreneur",
    },
    {
      name: "Review",
      key: "review",
    },
    {
      name: "Auto",
      key: "auto",
    },
    {
      name: "Energy",
      key: "energy",
    },
    {
      name: "Celebrity",
      key: "celebrity",
    },
    {
      name: "Medical",
      key: "medical",
    },
    {
      name: "Gadgets",
      key: "gadgets",
    },
    {
      name: "Design",
      key: "design",
    },
    {
      name: "EE",
      key: "EE",
    },
    {
      name: "Security",
      key: "security",
    },
    {
      name: "Mobile",
      key: "mobile",
    },
    {
      name: "Estate",
      key: "estate",
    },
    {
      name: "Funny",
      key: "funny"
    }
  ];
  @Output()
  closeEvent = new EventEmitter<boolean>;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
  }

  filter(category: string) {
    this.newsService.category$.next(category);
  }

  close() {
    this.closeEvent.emit(true);
  }

}
