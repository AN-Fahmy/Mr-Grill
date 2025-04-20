import { Component, Input } from '@angular/core';
import { GridBox1Component } from '@elements/boxes/grid-box1/grid-box1.component';
import { RouterLink } from '@angular/router';

/**
 * Defines projects area inside 'project-masonry' page
 */
@Component({
  selector: 'app-projects7',
  templateUrl: './projects7.component.html',
  styleUrls: ['./projects7.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    GridBox1Component
  ]
})
export class Projects7Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Defines the 'zoom' on section box
   */
  @Input() zoom: any;

}
