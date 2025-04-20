import { Component, Input } from '@angular/core';
import { TeamBox2Component } from '@elements/boxes/team-box2/team-box2.component';

/**
 * Defines team area inside 'home4' page
 */
@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.css'],
  standalone: true,
  imports: [
    TeamBox2Component
  ]
})
export class Team2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
