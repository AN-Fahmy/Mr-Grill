import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Defines navigation area inside page headers
 */
@Component({
  selector: 'app-header-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css',
  standalone: true
})
export class HeaderNavComponent {

}
