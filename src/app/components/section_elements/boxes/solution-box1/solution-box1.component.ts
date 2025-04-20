import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design for solution section
 */
@Component({
  selector: 'app-solution-box1',
  templateUrl: './solution-box1.component.html',
  styleUrls: ['./solution-box1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class SolutionBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
