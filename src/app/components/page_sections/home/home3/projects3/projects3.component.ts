import { Component, Input } from '@angular/core';
import { GridBox2Component } from '@elements/boxes/grid-box2/grid-box2.component';

/**
 * Defines projects area inside 'home3' page
 */
@Component({
  selector: 'app-projects3',
  templateUrl: './projects3.component.html',
  styleUrls: ['./projects3.component.css'],
  standalone: true,
  imports: [
    GridBox2Component
  ]
})
export class Projects3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
