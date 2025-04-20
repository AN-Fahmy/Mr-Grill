import { Component, Input } from '@angular/core';
import { BlogBox1Component } from '@elements/boxes/blog-box1/blog-box1.component';

/**
 * Defines blogs area inside 'home1' page
 */
@Component({
  selector: 'app-blogs1',
  templateUrl: './blogs1.component.html',
  styleUrls: ['./blogs1.component.css'],
  standalone: true,
  imports: [
    BlogBox1Component
  ]
})
export class Blogs1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
