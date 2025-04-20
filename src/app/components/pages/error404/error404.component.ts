import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines functional view for 'Error 404' page.
 */
@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css'],
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class Error404Component {

}
