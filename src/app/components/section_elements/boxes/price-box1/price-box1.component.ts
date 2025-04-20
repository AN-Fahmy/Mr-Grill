import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design for price section
 */
@Component({
  selector: 'app-price-box1',
  templateUrl: './price-box1.component.html',
  styleUrls: ['./price-box1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class PriceBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
