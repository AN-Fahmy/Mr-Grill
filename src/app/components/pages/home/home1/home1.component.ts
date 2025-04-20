import { Component } from '@angular/core';
import { Slider1Component } from '@elements/sliders/slider1/slider1.component';
import { Specializations1Component } from '@sections/home/home1/specializations1/specializations1.component';
import { About1Component } from '@sections/home/home1/about1/about1.component';
import { OurValue1Component } from '@sections/home/home1/our-value1/our-value1.component';
import { Mission1Component } from '@sections/home/home1/mission1/mission1.component';
import { Services1Component } from '@sections/home/home1/services1/services1.component';
import { CallUs1Component } from '@sections/home/home1/call-us1/call-us1.component';
import { Projects1Component } from '@sections/home/home1/projects1/projects1.component';
import { Blogs1Component } from '@sections/home/home1/blogs1/blogs1.component';
import { Testimonials1Component } from '@sections/home/home1/testimonials1/testimonials1.component';
import { HomeService } from '@services/home.service';

/**
 * Defines functional view for home page style 1.
 */
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
  standalone: true,
  imports: [
    Slider1Component,
    Specializations1Component,
    About1Component,
    OurValue1Component,
    Mission1Component,
    Services1Component,
    CallUs1Component,
    Projects1Component,
    Blogs1Component,
    Testimonials1Component
  ]
})
export class Home1Component {

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
  _data = new HomeService().getHome1Data();
}
