import { Component, Input } from '@angular/core';
import { ProjectBox2Component } from '@elements/boxes/project-box2/project-box2.component';
import { RouterLink } from '@angular/router';

/**
 * Defines projects area inside 'project-classic' page style 1
 */
@Component({
  selector: 'app-projects5',
  templateUrl: './projects5.component.html',
  styleUrls: ['./projects5.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    ProjectBox2Component
  ]
})
export class Projects5Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
