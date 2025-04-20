import { Component, Input } from '@angular/core';
import { ServiceBox3Component } from '@elements/boxes/service-box3/service-box3.component';

/**
 * Defines services area inside 'home3' page
 */
@Component({
  selector: 'app-services3',
  templateUrl: './services3.component.html',
  styleUrls: ['./services3.component.css'],
  standalone: true,
  imports: [
    ServiceBox3Component
  ]
})
export class Services3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
