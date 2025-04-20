import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

/**
 * Defines functional view for 'Contact' page.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    GoogleMapsModule
  ]
})
export class ContactComponent {

}
