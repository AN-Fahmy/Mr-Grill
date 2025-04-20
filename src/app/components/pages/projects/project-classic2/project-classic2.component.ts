import { Component } from '@angular/core';
import { Projects6Component } from '@sections/projects/projects6/projects6.component';
import { ProjectsService } from '@services/projects.service';

/**
 * Defines functional view for Project-Classic page style 2.
 */
@Component({
  selector: 'app-project-classic2',
  templateUrl: './project-classic2.component.html',
  styleUrls: ['./project-classic2.component.css'],
  standalone: true,
  imports: [
    Projects6Component
  ]
})
export class ProjectClassic2Component {

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
  _data = new ProjectsService().getProjectClassic2Data();
}
