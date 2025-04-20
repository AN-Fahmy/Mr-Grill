import { Component } from '@angular/core';
import { Projects5Component } from '@sections/projects/projects5/projects5.component';
import { ProjectsService } from '@services/projects.service';

/**
 * Defines functional view for Project-Classic page style 1.
 */
@Component({
  selector: 'app-project-classic',
  templateUrl: './project-classic.component.html',
  styleUrls: ['./project-classic.component.css'],
  standalone: true,
  imports: [
    Projects5Component
  ]
})
export class ProjectClassicComponent {

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
  _data = new ProjectsService().getProjectClassic1Data();
}
