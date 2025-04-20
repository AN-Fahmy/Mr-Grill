import { Component, Input } from '@angular/core';
import { ServiceBox2Component } from '@elements/boxes/service-box2/service-box2.component';

/**
 * Defines services area inside 'home2' page
 */
@Component({
  selector: 'app-services2',
  templateUrl: './services2.component.html',
  styleUrls: ['./services2.component.css'],
  standalone: true,
  imports: [
    ServiceBox2Component
  ]
})
export class Services2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
