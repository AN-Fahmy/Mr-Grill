import { Component } from '@angular/core';
import { LoaderDirective } from '@directives/loader/loader.directive';

/**
 * Defines a simple animated element to show app loading process.
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  standalone: true,
  imports: [
    LoaderDirective
  ]
})
export class LoaderComponent {
  
}
