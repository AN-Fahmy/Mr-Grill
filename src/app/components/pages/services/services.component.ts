import { Component } from '@angular/core';
import { About5Component } from '@sections/services/about5/about5.component';
import { Specializations3Component } from '@sections/home/home3/specializations3/specializations3.component';
import { Services3Component } from '@sections/home/home3/services3/services3.component';
import { About4Component } from '@sections/home/home3/about4/about4.component';
import { Projects3Component } from '@sections/home/home3/projects3/projects3.component';
import { Faq1Component } from '@sections/home/home3/faq1/faq1.component';
import { PagesService } from '@services/pages.service';

/**
 * Defines functional view for Services page.
 */
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [
    About5Component,
    Specializations3Component,
    Services3Component,
    About4Component,
    Projects3Component,
    Faq1Component
  ]
})
export class ServicesComponent {

  /**
   * Constructor
   */
  constructor() { }


  /**
   * Fetching entire page data (for all sections) 
   * and passing to view/component
   * 
   * (Here we are just demostrating sample data from json, 
   * in real scenario, proper type should be defined for '_data', before handling)
   */
  _data = new PagesService().getServicesData();
}
