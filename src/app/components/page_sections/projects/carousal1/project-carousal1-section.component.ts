import { Component, Input } from '@angular/core';
import { ProjectBox1Component } from '@elements/boxes/project-box1/project-box1.component';

/**
 * Defines carousel area inside 'project-carousel' page
 */
@Component({
  selector: 'app-project-carousal1-section',
  templateUrl: './project-carousal1-section.component.html',
  styleUrls: ['./project-carousal1-section.component.css'],
  standalone: true,
  imports: [
    ProjectBox1Component
  ]
})
export class ProjectCarousal1SectionComponent {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
