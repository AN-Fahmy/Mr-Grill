import { AfterViewInit, Component } from '@angular/core';

/**
 * JQuery referene variable
 * @ignore
 */
declare  var jQuery:  any;

/**
 * JQuery method having slider logic
 * @ignore
 */
declare  var load_rev_slider_4:  any;

/**
 * Page section containing main slider for 'home4'
 */
@Component({
  selector: 'app-slider4',
  templateUrl: './slider4.component.html',
  styleUrls: ['./slider4.component.css'],
  standalone: true
})
export class Slider4Component implements AfterViewInit {

  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * Initiating slider.
   * @ignore
   */
  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function () {
        load_rev_slider_4();
      }, 100);
    })(jQuery);
  }

}
