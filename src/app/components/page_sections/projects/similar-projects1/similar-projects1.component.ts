import { Component, Input } from '@angular/core';
import { ProjectBox1Component } from '@elements/boxes/project-box1/project-box1.component';

/**
 * Defines similar-projects area inside 'projects' page
 */
@Component({
  selector: 'app-similar-projects1',
  templateUrl: './similar-projects1.component.html',
  styleUrls: ['./similar-projects1.component.css'],
  standalone: true,
  imports: [
    ProjectBox1Component
  ]
})
export class SimilarProjects1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
