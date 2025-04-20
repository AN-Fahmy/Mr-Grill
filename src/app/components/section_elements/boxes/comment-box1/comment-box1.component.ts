import { Component, Input } from '@angular/core';

/**
 * Defines single box design for comment section
 */
@Component({
  selector: 'app-comment-box1',
  templateUrl: './comment-box1.component.html',
  styleUrls: ['./comment-box1.component.css'],
  standalone: true
})
export class CommentBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
