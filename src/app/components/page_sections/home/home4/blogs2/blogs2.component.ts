import { Component, Input } from '@angular/core';
import { BlogBox2Component } from '@elements/boxes/blog-box2/blog-box2.component';

/**
 * Defines blogs area inside 'home4' page
 */
@Component({
  selector: 'app-blogs2',
  templateUrl: './blogs2.component.html',
  styleUrls: ['./blogs2.component.css'],
  standalone: true,
  imports: [
    BlogBox2Component
  ]
})
export class Blogs2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
