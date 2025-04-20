import { Component, Input } from '@angular/core';

/**
 * Defines our-value area inside 'home1' page
 */
@Component({
  selector: 'app-our-value1',
  templateUrl: './our-value1.component.html',
  styleUrls: ['./our-value1.component.css'],
  standalone: true
})
export class OurValue1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
