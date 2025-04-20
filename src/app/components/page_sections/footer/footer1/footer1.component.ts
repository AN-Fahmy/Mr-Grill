import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines page footer area style 1
 */
@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class Footer1Component {

  /**
   * Defines the JSON value used by component, visible to user;
   * (type of page header 'dark' or 'light')
   */
  @Input() pageHeader: any;

}
