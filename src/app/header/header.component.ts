import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/service/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  canback$: Observable<boolean> = this.navigationService.canBack();
  constructor(
    private navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
  }


  activeMenu() {
    this.isActive = !this.isActive;
  }

  back() {
    this.navigationService.back()
  }

}
