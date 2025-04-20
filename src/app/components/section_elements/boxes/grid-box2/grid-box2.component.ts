import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 2) for image grid section
 */
@Component({
  selector: 'app-grid-box2',
  templateUrl: './grid-box2.component.html',
  styleUrls: ['./grid-box2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class GridBox2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
