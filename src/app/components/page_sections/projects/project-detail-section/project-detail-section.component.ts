import { Component, Input } from '@angular/core';

/**
 * Defines detail area inside 'project-details' page
 */
@Component({
  selector: 'app-project-detail-section',
  templateUrl: './project-detail-section.component.html',
  styleUrls: ['./project-detail-section.component.css'],
  standalone: true
})
export class ProjectDetailSectionComponent {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
