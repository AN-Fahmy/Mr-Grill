import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 1) for service section
 */
@Component({
  selector: 'app-service-box1',
  templateUrl: './service-box1.component.html',
  styleUrls: ['./service-box1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ServiceBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
