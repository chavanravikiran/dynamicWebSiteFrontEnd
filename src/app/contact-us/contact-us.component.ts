import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from '../google-map/google-map.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [GoogleMapComponent,GoogleMapsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
