import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines about area (style 2) inside 'home3' page
 */
@Component({
  selector: 'app-about4',
  templateUrl: './about4.component.html',
  styleUrls: ['./about4.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class About4Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
