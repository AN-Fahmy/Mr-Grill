import { Component, Input } from '@angular/core';
import { GridBox1Component } from '@elements/boxes/grid-box1/grid-box1.component';
import { RouterLink } from '@angular/router';

/**
 * Defines specialization area inside 'home1' page
 */
@Component({
  selector: 'app-specializations1',
  templateUrl: './specializations1.component.html',
  styleUrls: ['./specializations1.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    GridBox1Component
  ]
})
export class Specializations1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
