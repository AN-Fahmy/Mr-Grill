import { Component, Input } from '@angular/core';
import { GridBox4Component } from '@elements/boxes/grid-box4/grid-box4.component';
import { RouterLink } from '@angular/router';

/**
 * Defines projects area inside 'home4' page
 */
@Component({
  selector: 'app-projects4',
  templateUrl: './projects4.component.html',
  styleUrls: ['./projects4.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    GridBox4Component
  ]
})
export class Projects4Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Used to apply padding, in different types
   */
  @Input() projectGrid: any;
  
}
