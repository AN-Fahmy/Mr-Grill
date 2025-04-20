import { Component } from '@angular/core';
import { PostContentComponent } from '@sections/post/post-content/post-content.component';
import { BlogSidebar1Component } from '@sections/blog/blog-sidebar1/blog-sidebar1.component';
import { BlogsService } from '@services/blogs.service';

/**
 * Defines functional view for Post-Detail-with-Sidebar page.
 */
@Component({
  selector: 'app-post-with-sidebar',
  templateUrl: './post-with-sidebar.component.html',
  styleUrls: ['./post-with-sidebar.component.css'],
  standalone: true,
  imports: [
    PostContentComponent,
    BlogSidebar1Component
  ]
})
export class PostWithSidebarComponent {

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
  _data = new BlogsService().getBlogDetailSidebarData();
}
