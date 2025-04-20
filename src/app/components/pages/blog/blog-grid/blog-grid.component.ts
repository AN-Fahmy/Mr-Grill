import { Component } from '@angular/core';
import { BlogGrid1Component } from '@sections/blog/blog-grid1/blog-grid1.component';
import { BlogsService } from '@services/blogs.service';

/**
 * Defines functional view for Blog-Grid page.
 */
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css'],
  standalone: true,
  imports: [
    BlogGrid1Component
  ]
})
export class BlogGridComponent {

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
  _data = new BlogsService().getBlogGridData();
}
