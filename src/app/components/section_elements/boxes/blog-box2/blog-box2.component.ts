import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines single box design (style 2) for blog section
 */
@Component({
  selector: 'app-blog-box2',
  templateUrl: './blog-box2.component.html',
  styleUrls: ['./blog-box2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class BlogBox2Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

  /**
   * Used to apply custom padding
   * 
   * default is 'p-a30';
   * set '1' for 'p-t30'
   */
  @Input() textleft: any;

}
