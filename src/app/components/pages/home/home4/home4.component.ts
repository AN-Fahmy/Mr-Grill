import { Component } from '@angular/core';
import { Slider4Component } from '@elements/sliders/slider4/slider4.component';
import { About3Component } from '@sections/home/home3/about3/about3.component';
import { Specializations3Component } from '@sections/home/home3/specializations3/specializations3.component';
import { OurValue2Component } from '@sections/home/home2/our-value2/our-value2.component';
import { Projects4Component } from '@sections/home/home4/projects4/projects4.component';
import { Services4Component } from '@sections/home/home4/services4/services4.component';
import { About4Component } from '@sections/home/home3/about4/about4.component';
import { Team2Component } from '@sections/home/home4/team2/team2.component';
import { Blogs2Component } from '@sections/home/home4/blogs2/blogs2.component';
import { Faq1Component } from '@sections/home/home3/faq1/faq1.component';
import { HomeService } from '@services/home.service';

/**
 * Defines functional view for home page style 4.
 */
@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css'],
  standalone: true,
  imports: [
    Slider4Component,
    About3Component,
    Specializations3Component,
    OurValue2Component,
    Projects4Component,
    Services4Component,
    About4Component,
    Team2Component,
    Blogs2Component,
    Faq1Component
  ]
})
export class Home4Component {

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
  _data = new HomeService().getHome4Data();
}
