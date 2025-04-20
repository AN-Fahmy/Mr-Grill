import { Component, Input } from '@angular/core';
import { TeamBox1Component } from '@elements/boxes/team-box1/team-box1.component';

/**
 * Defines team area inside 'home2' page
 */
@Component({
  selector: 'app-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.css'],
  standalone: true,
  imports: [
    TeamBox1Component
  ]
})
export class Team1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
