import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 3) for service section
 */
@Component({
  selector: 'app-service-box3',
  templateUrl: './service-box3.component.html',
  styleUrls: ['./service-box3.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ServiceBox3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
