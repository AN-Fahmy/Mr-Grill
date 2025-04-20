import { Component } from '@angular/core';
import { Slider2Component } from '@elements/sliders/slider2/slider2.component';
import { Specializations2Component } from '@sections/home/home2/specializations2/specializations2.component';
import { About2Component } from '@sections/home/home2/about2/about2.component';
import { OurValue2Component } from '@sections/home/home2/our-value2/our-value2.component';
import { Mission2Component } from '@sections/home/home2/mission2/mission2.component';
import { Services2Component } from '@sections/home/home2/services2/services2.component';
import { CallUs2Component } from '@sections/home/home2/call-us2/call-us2.component';
import { Projects2Component } from '@sections/home/home2/projects2/projects2.component';
import { Team1Component } from '@sections/home/home2/team1/team1.component';
import { Pricing1Component } from '@sections/home/home2/pricing1/pricing1.component';
import { Clients1Component } from '@sections/home/home2/clients1/clients1.component';
import { Testimonials2Component } from '@sections/home/home2/testimonials2/testimonials2.component';
import { HomeService } from '@services/home.service';

/**
 * Defines functional view for home page style 2.
 */
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css'],
  standalone: true,
  imports: [
    Slider2Component,
    Specializations2Component,
    About2Component,
    OurValue2Component,
    Mission2Component,
    Services2Component,
    CallUs2Component,
    Projects2Component,
    Team1Component,
    Pricing1Component,
    Clients1Component,
    Testimonials2Component
  ]
})
export class Home2Component {

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
  _data = new HomeService().getHome2Data();
}
