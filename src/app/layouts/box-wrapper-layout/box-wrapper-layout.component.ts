import { Component } from '@angular/core';
import { HomeLayoutComponent } from "../home-layout/home-layout.component";

/**
 * Defines the outer/wrapper layout for pages, contains boxed width
 * 
 * (Currenlty only home page 3 using this layout)
 */
@Component({
  selector: 'app-box-wrapper-layout',
  imports: [
    HomeLayoutComponent
],
  templateUrl: './box-wrapper-layout.component.html',
  styleUrl: './box-wrapper-layout.component.css',
  standalone: true
})
export class BoxWrapperLayoutComponent {

}
