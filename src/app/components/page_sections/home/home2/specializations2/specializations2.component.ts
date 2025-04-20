import { Component, Input } from '@angular/core';
import { GridBox3Component } from '@elements/boxes/grid-box3/grid-box3.component';

/**
 * Defines specialization area inside 'home2' page
 */
@Component({
  selector: 'app-specializations2',
  templateUrl: './specializations2.component.html',
  styleUrls: ['./specializations2.component.css'],
  standalone: true,
  imports: [
    GridBox3Component
  ]
})
export class Specializations2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
