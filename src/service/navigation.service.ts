import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd, NavigationStart } from '@angular/router'
import { filter, map, Observable, of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = []


  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }

  canBack(): Observable<boolean> {
    return this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        map((event: any) => event.url !== '/')
      );
  }
}