import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines sidebar area for blog-detail page
 */
@Component({
  selector: 'app-blog-sidebar1',
  templateUrl: './blog-sidebar1.component.html',
  styleUrls: ['./blog-sidebar1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class BlogSidebar1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
