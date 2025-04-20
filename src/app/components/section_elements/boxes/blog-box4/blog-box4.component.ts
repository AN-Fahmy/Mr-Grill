import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 4) for blog section
 */
@Component({
  selector: 'app-blog-box4',
  templateUrl: './blog-box4.component.html',
  styleUrls: ['./blog-box4.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class BlogBox4Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
