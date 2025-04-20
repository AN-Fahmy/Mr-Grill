import { Component } from '@angular/core';
import { ProjectCarousal1SectionComponent } from '@sections/projects/carousal1/project-carousal1-section.component';
import { ProjectsService } from '@services/projects.service';

/**
 * Defines functional view for Porject-Carousel page.
 */
@Component({
  selector: 'app-project-carousal',
  templateUrl: './project-carousal.component.html',
  styleUrls: ['./project-carousal.component.css'],
  standalone: true,
  imports: [
    ProjectCarousal1SectionComponent
  ]
})
export class ProjectCarousalComponent {

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
  _data = new ProjectsService().getProjectCarouselData();
}
