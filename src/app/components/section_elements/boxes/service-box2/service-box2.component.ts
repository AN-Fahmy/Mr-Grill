import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 2) for service section
 */
@Component({
  selector: 'app-service-box2',
  templateUrl: './service-box2.component.html',
  styleUrls: ['./service-box2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ServiceBox2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
