import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines about area (style 1) inside 'home3' page
 */
@Component({
  selector: 'app-about3',
  templateUrl: './about3.component.html',
  styleUrls: ['./about3.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class About3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Used for title visibility
   */
  @Input() title: any;

}
