import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 2) for project section
 */
@Component({
  selector: 'app-project-box2',
  templateUrl: './project-box2.component.html',
  styleUrls: ['./project-box2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ProjectBox2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Defines the project box type 
   * 
   * set '1' for style 1;
   * set '2' for style 2
   */
  @Input() classic: any;

}
