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
declare  var load_rev_slider_2:  any;

/**
 * Page section containing main slider for 'home2'
 */
@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class Slider2Component implements AfterViewInit {

  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * Initiating slider.
   * @ignore
   */
  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function () {
        load_rev_slider_2();
      }, 100);
    })(jQuery);
  }

}
