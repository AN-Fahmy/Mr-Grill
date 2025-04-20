import { Component, Input } from '@angular/core';
import { ServiceBox3Component } from '@elements/boxes/service-box3/service-box3.component';

/**
 * Defines services area inside 'home4' page
 */
@Component({
  selector: 'app-services4',
  templateUrl: './services4.component.html',
  styleUrls: ['./services4.component.css'],
  standalone: true,
  imports: [
    ServiceBox3Component
  ]
})
export class Services4Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
