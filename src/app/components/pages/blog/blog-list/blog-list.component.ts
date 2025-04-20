import { Component } from '@angular/core';
import { BlogList1Component } from '@sections/blog/blog-list1/blog-list1.component';
import { BlogSidebar1Component } from '@sections/blog/blog-sidebar1/blog-sidebar1.component';
import { BlogsService } from '@services/blogs.service';

/**
 * Defines functional view for Blog-List page.
 */
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  standalone: true,
  imports: [
    BlogList1Component,
    BlogSidebar1Component
  ]
})
export class BlogListComponent {

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Fetching entire page data (for all sections) 
   * and passing to view/component
   * 
   * (Here we are just demostrating sample data from json, 
   * in real scenario, proper type should be defined for '_data', before handling)
   */
  _data = new BlogsService().getBlogListData();
}
