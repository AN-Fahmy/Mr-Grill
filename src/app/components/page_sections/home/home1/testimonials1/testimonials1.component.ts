import { Component, Input } from '@angular/core';
import { TestimonialBox1Component } from '@elements/boxes/testimonial-box1/testimonial-box1.component';

/**
 * Defines testimonials area inside 'home1' page
 */
@Component({
  selector: 'app-testimonials1',
  templateUrl: './testimonials1.component.html',
  styleUrls: ['./testimonials1.component.css'],
  standalone: true,
  imports: [
    TestimonialBox1Component
  ]
})
export class Testimonials1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
