import { Component, Input } from '@angular/core';
import { BlogBox4Component } from '@elements/boxes/blog-box4/blog-box4.component';

/**
 * Defines masonry area for blog pages
 */
@Component({
  selector: 'app-blog-masonary1',
  templateUrl: './blog-masonary1.component.html',
  styleUrls: ['./blog-masonary1.component.css'],
  standalone: true,
  imports: [
    BlogBox4Component
  ]
})
export class BlogMasonary1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
