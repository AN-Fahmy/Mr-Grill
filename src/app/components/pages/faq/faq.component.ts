import { Component } from '@angular/core';
import { AccordianBox1Component } from '@elements/boxes/accordian-box1/accordian-box1.component';
import { PagesService } from '@services/pages.service';

/**
 * Defines functional view for FAQ page.
 */
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [
    AccordianBox1Component
  ]
})
export class FaqComponent {

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
  _data = new PagesService().getFAQData();

}
