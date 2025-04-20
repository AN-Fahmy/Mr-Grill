import { Component } from '@angular/core';
import { Projects4Component } from '@sections/home/home4/projects4/projects4.component';
import { ProjectsService } from '@services/projects.service';

/**
 * Defines functional view for Project-Grid page.
 */
@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css'],
  standalone: true,
  imports: [
    Projects4Component
  ]
})
export class ProjectGridComponent {

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Fetching entire page data (for all sections) 
   * and passing to view/component
   * 
   * (Here we are just demostrating sample data from json, 
   * in real scenario, proper type should be defined for '_data', before handling)
   */
  _data = new ProjectsService().getProjectGridData();
}
