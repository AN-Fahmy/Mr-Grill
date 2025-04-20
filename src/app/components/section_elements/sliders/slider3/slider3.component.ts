import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * JQuery referene variable
 * @ignore
 */
declare  var jQuery:  any;

/**
 * JQuery method having slider logic
 * @ignore
 */
declare  var load_rev_slider_3:  any;

/**
 * Page section containing main slider for 'home3'
 */
@Component({
  selector: 'app-slider3',
  templateUrl: './slider3.component.html',
  styleUrls: ['./slider3.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class Slider3Component implements AfterViewInit {

  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * Initiating slider.
   * @ignore
   */
  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function () {
        load_rev_slider_3();
      }, 100);
    })(jQuery);
  }

}
