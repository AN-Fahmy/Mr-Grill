import { Component, Input } from '@angular/core';

/**
 * Defines single box design (style 1) for accordian section
 */
@Component({
  selector: 'app-accordian-box1',
  templateUrl: './accordian-box1.component.html',
  styleUrls: ['./accordian-box1.component.css'],
  standalone: true
})
export class AccordianBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
