import { Component, Input } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { route } from '@shared/constants';
import { Header1Component } from '@sections/header/header1/header1.component';
import { Header2Component } from '@sections/header/header2/header2.component';
import { Header3Component } from '@sections/header/header3/header3.component';
import { Footer1Component } from '@sections/footer/footer1/footer1.component';
import { Footer2Component } from '@sections/footer/footer2/footer2.component';

/**
 * Defines the outer/wrapper layout for 'home' pages 
 */
@Component({
  selector: 'app-home-layout',
  imports: [
    RouterOutlet,
    Header1Component,
    Header2Component,
    Header3Component,
    Footer1Component,
    Footer2Component
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
  standalone: true
})
export class HomeLayoutComponent {

  /**
   * Defines header type
   */
  @Input() header: string = "1";

  /**
   * Defines footer type
   */
  @Input() footer: string = "1";

  /**
   * Constructor
   * @param router App navigation router
   */
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setHeaderFor(event.url);
        this.setFooterFor(event.url);
      }
    });
  }

  /**
   * Logic for selecting header type as per current page
   * @param url endpoint name for current page
   */
  setHeaderFor(url: string) {
    if (url =="/" + route.home.HOME2) {
      this.header = "2";
    } else if (url =="/" + route.home.HOME4) {
      this.header = "3";
    } else {
      this.header = "1";
    }
  }

  /**
   * Logic for selecting footer type as per current page
   * @param url endpoint name for current page
   */
  setFooterFor(url: string) {
    return (url =="/" + route.home.HOME2)
      ? this.footer = "2"
      : this.footer = "1";
  }
}
