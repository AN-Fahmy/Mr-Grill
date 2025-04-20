import { Component, Input } from '@angular/core';
import { ServiceBox1Component } from '@elements/boxes/service-box1/service-box1.component';

/**
 * Defines specialization area for 'about' page
 */
@Component({
  selector: 'app-specializations4',
  templateUrl: './specializations4.component.html',
  styleUrls: ['./specializations4.component.css'],
  standalone: true,
  imports: [
    ServiceBox1Component
  ]
})
export class Specializations4Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
