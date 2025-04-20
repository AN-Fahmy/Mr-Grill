import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderNavComponent } from "../header-nav/header-nav.component";

/**
 * Defines page header area style 2
 */
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
  standalone: true,
  imports: [RouterLink, HeaderNavComponent]
})
export class Header2Component {

}
