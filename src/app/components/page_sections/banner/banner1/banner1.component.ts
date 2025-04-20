import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, Event, NavigationEnd } from '@angular/router';
import { BannerService } from '@services/banner.service';

/**
 * Defines banner area for inner pages
 */
@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class Banner1Component {

  /**
   * Defines the JSON value used, visible to user
   */
  @Input() data: any = {};

  /**
   * Constructor
   * @param router App navigation router
   * @param bannerService Data service for handling banner events
   */
  constructor(private router: Router, private bannerService: BannerService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setBannerFor(event.url);
      }
    });
  }

  /**
   * Selecting and sending banner data to page
   * @param url endpoing name for current page
   */
  setBannerFor(url: string) {
    this.data = this.bannerService.getBannerFor(url);
  }

}
