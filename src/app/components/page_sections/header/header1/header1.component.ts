import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderNavComponent } from "../header-nav/header-nav.component";

/**
 * Defines page header area style 1
 */
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    HeaderNavComponent
]
})
export class Header1Component {

}
