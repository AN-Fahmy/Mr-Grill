import { Component, Input } from '@angular/core';
import { AccordianBox1Component } from '@elements/boxes/accordian-box1/accordian-box1.component';
import { SolutionBox1Component } from '@elements/boxes/solution-box1/solution-box1.component';

/**
 * Defines FAQ area inside 'home3' page
 */
@Component({
  selector: 'app-faq1',
  templateUrl: './faq1.component.html',
  styleUrls: ['./faq1.component.css'],
  standalone: true,
  imports: [
    AccordianBox1Component,
    SolutionBox1Component
  ]
})
export class Faq1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
