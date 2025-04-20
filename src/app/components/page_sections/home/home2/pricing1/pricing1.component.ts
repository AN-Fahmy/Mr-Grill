import { Component, Input } from '@angular/core';
import { PriceBox1Component } from '@elements/boxes/price-box1/price-box1.component';

/**
 * Defines pricing-plans area inside 'home2' page
 */
@Component({
  selector: 'app-pricing1',
  templateUrl: './pricing1.component.html',
  styleUrls: ['./pricing1.component.css'],
  standalone: true,
  imports: [
    PriceBox1Component
  ]
})
export class Pricing1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
