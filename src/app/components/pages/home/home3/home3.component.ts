import { Component } from '@angular/core';
import { Slider3Component } from '@elements/sliders/slider3/slider3.component';
import { About3Component } from '@sections/home/home3/about3/about3.component';
import { Specializations3Component } from '@sections/home/home3/specializations3/specializations3.component';
import { Mission1Component } from '@sections/home/home1/mission1/mission1.component';
import { CallUs1Component } from '@sections/home/home1/call-us1/call-us1.component';
import { Services3Component } from '@sections/home/home3/services3/services3.component';
import { Projects3Component } from '@sections/home/home3/projects3/projects3.component';
import { About4Component } from '@sections/home/home3/about4/about4.component';
import { Story1Component } from '@sections/home/home3/story1/story1.component';
import { Faq1Component } from '@sections/home/home3/faq1/faq1.component';
import { HomeService } from '@services/home.service';

/**
 * Defines functional view for home page style 3.
 */
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css'],
  standalone: true,
  imports: [
    Slider3Component,
    About3Component,
    Specializations3Component,
    Mission1Component,
    CallUs1Component,
    Services3Component,
    Projects3Component,
    About4Component,
    Story1Component,
    Faq1Component
  ]
})
export class Home3Component {

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
  _data = new HomeService().getHome3Data();
}
