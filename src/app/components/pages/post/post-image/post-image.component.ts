import { Component } from '@angular/core';
import { PostContentComponent } from '@sections/post/post-content/post-content.component';
import { BlogsService } from '@services/blogs.service';

/**
 * Defines functional view for Post-Image page.
 */
@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css'],
  standalone: true,
  imports: [
    PostContentComponent
  ]
})
export class PostImageComponent {

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
  _data = new BlogsService().getBlogDetailImageData();
}
