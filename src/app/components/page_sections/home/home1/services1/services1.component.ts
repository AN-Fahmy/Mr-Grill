import { Component, Input } from '@angular/core';
import { ServiceBox1Component } from '@elements/boxes/service-box1/service-box1.component';

/**
 * Defines services area inside 'home1' page
 */
@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css'],
  standalone: true,
  imports: [
    ServiceBox1Component
  ]
})
export class Services1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
