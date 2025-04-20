import { Component } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';
import { LoaderComponent } from '@shared/loader/loader.component';

/**
 * JQuery referene variable
 * @ignore
 */
declare var jQuery: any;

/**
 * Method loads all required jQuery functions while app is ready
 * @ignore
 */
declare function initializeOnReady(): any;

/**
 * Method loads all required jQuery functions while app is loaded
 * @ignore
 */
declare function initializeOnLoad(): any;

/**
 * Root/Entry-level component of the app
 */
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /**
   * App title
   */
  title = 'shapen bharat';

  /**
   * Constructor
   * @param router App navigation router
   */
  constructor(private router: Router) {

  }

  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * @ignore
   */
  ngAfterViewInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.reinitializeThings();
      }
    });
  }

  /**
   * Reloads all jQuery functions required
   */
  reinitializeThings() {
    try {
      (function ($) {
        setTimeout(function () {
          initializeOnLoad();
          initializeOnReady();
        }, 1000);
      })(jQuery);
    } catch (e) {}
  }
}
