import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderNavComponent } from "../header-nav/header-nav.component";

/**
 * Defines page header area style 3
 */
@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css'],
  standalone: true,
  imports: [RouterLink, HeaderNavComponent]
})
export class Header3Component {

}
