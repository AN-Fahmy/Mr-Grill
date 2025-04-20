import { Component, Input } from '@angular/core';

/**
 * Defines single team member box style 2
 */
@Component({
  selector: 'app-team-box2',
  templateUrl: './team-box2.component.html',
  styleUrls: ['./team-box2.component.css'],
  standalone: true
})
export class TeamBox2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
