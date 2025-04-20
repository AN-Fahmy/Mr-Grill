import { Component, Input } from '@angular/core';
import { TestimonialBox2Component } from '@elements/boxes/testimonial-box2/testimonial-box2.component';

/**
 * Defines testimonials area inside 'home2' page
 */
@Component({
  selector: 'app-testimonials2',
  templateUrl: './testimonials2.component.html',
  styleUrls: ['./testimonials2.component.css'],
  standalone: true,
  imports: [
    TestimonialBox2Component
  ]
})
export class Testimonials2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
