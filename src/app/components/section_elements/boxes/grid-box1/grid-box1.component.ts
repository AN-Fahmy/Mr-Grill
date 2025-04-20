import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 1) for image grid section
 */
@Component({
  selector: 'app-grid-box1',
  templateUrl: './grid-box1.component.html',
  styleUrls: ['./grid-box1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class GridBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Used to apply 'zoom' ability on image box
   * 
   * set '1' for apply
   */
  @Input() zoom: any;

}
