import { Component, Input } from '@angular/core';
import { BlogBox2Component } from '@elements/boxes/blog-box2/blog-box2.component';

/**
 * Defines grid area for blog pages
 */
@Component({
  selector: 'app-blog-grid1',
  templateUrl: './blog-grid1.component.html',
  styleUrls: ['./blog-grid1.component.css'],
  standalone: true,
  imports: [
    BlogBox2Component
  ]
})
export class BlogGrid1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
