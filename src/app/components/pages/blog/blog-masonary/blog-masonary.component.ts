import { Component } from '@angular/core';
import { BlogMasonary1Component } from '@sections/blog/blog-masonary1/blog-masonary1.component';
import { BlogsService } from '@services/blogs.service';

/**
 * Defines functional view for Blog-Masonry page.
 */
@Component({
  selector: 'app-blog-masonary',
  templateUrl: './blog-masonary.component.html',
  styleUrls: ['./blog-masonary.component.css'],
  standalone: true,
  imports: [
    BlogMasonary1Component
  ]
})
export class BlogMasonaryComponent {

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
  _data = new BlogsService().getBlogMasonryData();
}
