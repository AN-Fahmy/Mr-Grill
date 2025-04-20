import { Component, Input } from '@angular/core';
import { GridBox1Component } from '@elements/boxes/grid-box1/grid-box1.component';

/**
 * Defines specialization area inside 'home3' page
 */
@Component({
  selector: 'app-specializations3',
  templateUrl: './specializations3.component.html',
  styleUrls: ['./specializations3.component.css'],
  standalone: true,
  imports: [
    GridBox1Component
  ]
})
export class Specializations3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
 
}
