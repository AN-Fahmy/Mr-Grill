import { Component, Input } from '@angular/core';
import { ProjectBox2Component } from '@elements/boxes/project-box2/project-box2.component';
import { RouterLink } from '@angular/router';

/**
 * Defines projects area inside 'project-classic' page style 2
 */
@Component({
  selector: 'app-projects6',
  templateUrl: './projects6.component.html',
  styleUrls: ['./projects6.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    ProjectBox2Component
  ]
})
export class Projects6Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
