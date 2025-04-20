import { Component, Input } from '@angular/core';
import { GridBox2Component } from '@elements/boxes/grid-box2/grid-box2.component';

/**
 * Defines projects area inside 'home1' page
 */
@Component({
  selector: 'app-projects1',
  templateUrl: './projects1.component.html',
  styleUrls: ['./projects1.component.css'],
  standalone: true,
  imports: [
    GridBox2Component
  ]
})
export class Projects1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
