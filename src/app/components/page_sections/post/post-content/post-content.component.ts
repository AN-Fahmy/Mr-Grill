import { AfterViewInit, Component, Input } from '@angular/core';
import { SafePipe } from '../../../../pipes/safe.pipe';
import { BlogBox1Component } from '@elements/boxes/blog-box1/blog-box1.component';
import { CommentBox1Component } from '@elements/boxes/comment-box1/comment-box1.component';
import { RouterLink } from '@angular/router';

/**
 * JQuery referene variable
 * @ignore
 */
declare var jQuery: any;

/**
 * JQuery method having slider logic
 * @ignore
 */
declare var owl_slider_one: any;

/**
 * Defines blog-content area inside 'post' pages
 */
@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    SafePipe,
    BlogBox1Component,
    CommentBox1Component
  ]
})
export class PostContentComponent implements AfterViewInit {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Defines the type of post (0, 1, 2 or 3)
   */
  @Input() type: any;

  /**
   * A callback method that is invoked immediately 
   * after Angular has completed initialization of a component's view. 
   * Initiating slider.
   * @ignore
   */
  ngAfterViewInit(): void {
    (function ($) {
      setTimeout(function () {
        owl_slider_one();
      }, 0);
    })(jQuery);
  }

}
