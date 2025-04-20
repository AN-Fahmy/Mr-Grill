import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines our-value area inside 'home2' page
 */
@Component({
  selector: 'app-our-value2',
  templateUrl: './our-value2.component.html',
  styleUrls: ['./our-value2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class OurValue2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
