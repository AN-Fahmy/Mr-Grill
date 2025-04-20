import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines clients area inside 'home2' page
 */
@Component({
  selector: 'app-clients1',
  templateUrl: './clients1.component.html',
  styleUrls: ['./clients1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class Clients1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
