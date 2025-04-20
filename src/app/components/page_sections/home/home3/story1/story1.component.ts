import { Component, Input } from '@angular/core';
import { StoryBox1Component } from '@elements/boxes/story-box1/story-box1.component';

/**
 * Defines story section inside 'home3' page
 */
@Component({
  selector: 'app-story1',
  templateUrl: './story1.component.html',
  styleUrls: ['./story1.component.css'],
  standalone: true,
  imports: [
    StoryBox1Component
  ]
})
export class Story1Component {

  /**
   * Defines the JSON value used by component, visible to user
   */
  @Input() data: any;
  
}
