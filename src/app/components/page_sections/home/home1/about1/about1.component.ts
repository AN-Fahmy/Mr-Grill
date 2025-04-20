import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
declare  var about_home:  any;

/**
 * Defines about area inside 'home1' page
 */
@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class About1Component implements AfterViewInit {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * Initiating slider.
   * @ignore
   */
  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function(){
        about_home();
        }, 0);
      })(jQuery);
  }

}
