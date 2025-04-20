import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner1Component } from '@sections/banner/banner1/banner1.component';
import { Footer1Component } from '@sections/footer/footer1/footer1.component';
import { Header1Component } from '@sections/header/header1/header1.component';

/**
 * Defines the outer/wrapper layout for inner pages 
 * 
 * (except of 'home' pages)
 */
@Component({
  selector: 'app-inner-pages-layout',
  imports: [
    RouterOutlet,
    Header1Component,
    Banner1Component,
    Footer1Component
  ],
  templateUrl: './inner-pages-layout.component.html',
  styleUrl: './inner-pages-layout.component.css',
  standalone: true
})
export class InnerPagesLayoutComponent {

}
