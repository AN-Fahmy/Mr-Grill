import { Component, Input } from '@angular/core';
import { GridBox1Component } from '@elements/boxes/grid-box1/grid-box1.component';

/**
 * Defines projects area inside 'home2' page
 */
@Component({
  selector: 'app-projects2',
  templateUrl: './projects2.component.html',
  styleUrls: ['./projects2.component.css'],
  standalone: true,
  imports: [
    GridBox1Component
  ]
})
export class Projects2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Defines 'zoom' property for project box
   */
  @Input() zoom: any;

}
