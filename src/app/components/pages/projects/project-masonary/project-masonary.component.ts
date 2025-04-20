import { Component } from '@angular/core';
import { Projects7Component } from '@sections/projects/projects7/projects7.component';
import { ProjectsService } from '@services/projects.service';

/**
 * Defines functional view for Project-Masonry page.
 */
@Component({
  selector: 'app-project-masonary',
  templateUrl: './project-masonary.component.html',
  styleUrls: ['./project-masonary.component.css'],
  standalone: true,
  imports: [
    Projects7Component
  ]
})
export class ProjectMasonaryComponent {

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
  _data = new ProjectsService().getProjectMasonryData();
}
