import { Component, Input } from '@angular/core';
import { TeamBox2Component } from '@elements/boxes/team-box2/team-box2.component';

/**
 * Defines team area for 'about' page
 */
@Component({
  selector: 'app-team3',
  templateUrl: './team3.component.html',
  styleUrls: ['./team3.component.css'],
  standalone: true,
  imports: [
    TeamBox2Component
  ]
})
export class Team3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
