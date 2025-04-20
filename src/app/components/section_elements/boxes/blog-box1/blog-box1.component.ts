import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 1) for blog section
 */
@Component({
  selector: 'app-blog-box1',
  templateUrl: './blog-box1.component.html',
  styleUrls: ['./blog-box1.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class BlogBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
