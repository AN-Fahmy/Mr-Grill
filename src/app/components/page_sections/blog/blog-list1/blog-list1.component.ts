import { Component, Input } from '@angular/core';
import { BlogBox3Component } from '@elements/boxes/blog-box3/blog-box3.component';

/**
 * Defines list area for blog pages
 */
@Component({
  selector: 'app-blog-list1',
  templateUrl: './blog-list1.component.html',
  styleUrls: ['./blog-list1.component.css'],
  standalone: true,
  imports: [
    BlogBox3Component
  ]
})
export class BlogList1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
