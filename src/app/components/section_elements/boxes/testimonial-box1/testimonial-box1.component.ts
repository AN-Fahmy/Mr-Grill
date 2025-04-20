import { Component, Input } from '@angular/core';

/**
 * Defines single testimonial box style 1
 */
@Component({
  selector: 'app-testimonial-box1',
  templateUrl: './testimonial-box1.component.html',
  styleUrls: ['./testimonial-box1.component.css'],
  standalone: true
})
export class TestimonialBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
