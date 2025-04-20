import { Component, Input } from '@angular/core';

/**
 * Defines single story box
 */
@Component({
  selector: 'app-story-box1',
  templateUrl: './story-box1.component.html',
  styleUrls: ['./story-box1.component.css'],
  standalone: true
})
export class StoryBox1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;

}
