import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 1) for project section
 */
@Component({
  selector: 'app-project-box1',
  templateUrl: './project-box1.component.html',
  styleUrls: ['./project-box1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ProjectBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
