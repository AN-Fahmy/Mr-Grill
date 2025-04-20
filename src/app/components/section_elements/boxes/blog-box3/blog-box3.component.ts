import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 3) for blog section
 */
@Component({
  selector: 'app-blog-box3',
  templateUrl: './blog-box3.component.html',
  styleUrls: ['./blog-box3.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class BlogBox3Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
