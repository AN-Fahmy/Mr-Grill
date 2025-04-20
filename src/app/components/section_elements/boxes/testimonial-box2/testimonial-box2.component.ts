import { Component, Input } from '@angular/core';

/**
 * Defines single testimonial box style 2
 */
@Component({
  selector: 'app-testimonial-box2',
  templateUrl: './testimonial-box2.component.html',
  styleUrls: ['./testimonial-box2.component.css'],
  standalone: true
})
export class TestimonialBox2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
