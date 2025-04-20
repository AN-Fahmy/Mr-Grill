import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 4) for image grid section
 */
@Component({
  selector: 'app-grid-box4',
  templateUrl: './grid-box4.component.html',
  styleUrls: ['./grid-box4.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class GridBox4Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
