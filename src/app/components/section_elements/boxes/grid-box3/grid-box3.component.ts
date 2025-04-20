import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 3) for image grid section
 */
@Component({
  selector: 'app-grid-box3',
  templateUrl: './grid-box3.component.html',
  styleUrls: ['./grid-box3.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class GridBox3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
