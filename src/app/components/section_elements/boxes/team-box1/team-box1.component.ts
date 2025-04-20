import { Component, Input } from '@angular/core';

/**
 * Defines single team member box style 1
 */
@Component({
  selector: 'app-team-box1',
  templateUrl: './team-box1.component.html',
  styleUrls: ['./team-box1.component.css'],
  standalone: true
})
export class TeamBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
