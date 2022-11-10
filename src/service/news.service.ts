import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    news = new BehaviorSubject(null);
    category$: any = new BehaviorSubject(null);
    search$: any = new BehaviorSubject(null);
    latestNews$: any = new BehaviorSubject(null);

    constructor(
        private http: HttpClient,
    ) {
    }

    fetchLatestNews(): Observable<any> {

        return this.http.get(
            `https://api.currentsapi.services/v1/latest-news?apiKey=1rYRm8imaj9-VgXy3-QnzKpzfW-w8C8DdN-y8btbxZdpt0WH&page_size=100`, {});
    }


    search(params: any): Observable<any> {
        const { category, queryString } = params;
        let url = `https://api.currentsapi.services/v1/search?apiKey=1rYRm8imaj9-VgXy3-QnzKpzfW-w8C8DdN-y8btbxZdpt0WH&page_size=50&`;
        let string = '';
        if (category) {
            string = `category=${category}`;
        } else {
            string = `keywords=${queryString}`
        };
        return this.http.get(
            `${url}${string}`, {
        }
        );
    }

    // For detail page
    saveSelectedNews(news: any): void {
        this.news.next(news);
    }

    getSelectedNews(): Observable<any> {
        return this.news.asObservable();
    }

}
