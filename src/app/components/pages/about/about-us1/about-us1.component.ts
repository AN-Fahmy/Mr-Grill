import { Component } from '@angular/core';
import { About3Component } from '@sections/home/home3/about3/about3.component';
import { Specializations4Component } from '@sections/about/specializations4/specializations4.component';
import { Team3Component } from '@sections/about/team3/team3.component';
import { Story1Component } from '@sections/home/home3/story1/story1.component';
import { PagesService } from '@services/pages.service';

/**
 * Defines functional view for About-Us page.
 */
@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html',
  styleUrls: ['./about-us1.component.css'],
  standalone: true,
  imports: [
    About3Component,
    Specializations4Component,
    Team3Component,
    Story1Component
  ]
})
export class AboutUs1Component {

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Fetching entire page data (for all sections) 
   * and passing to view/component
   * 
   * (Here we are just demostrating sample data from json, 
   * in real scenario, proper type should be defined for '_data', before handling)
   */
  _data = new PagesService().getAboutData();

}
