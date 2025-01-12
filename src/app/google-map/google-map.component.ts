import { CommonModule } from '@angular/common';
import { Component, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class GoogleMapComponent implements OnInit {
  @Input() lat: number = 18.5599; // Default latitude
  @Input() lng: number = 73.7622; // Default longitude
  @Input() zoom: number = 12; // Default zoom level

  center: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };  
  markerPosition: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };
  
  constructor() {}

  ngOnInit(): void {
    this.updateCenter();
    this.updateCenterAndMarker();
  }
  ngOnChanges(): void {
    this.updateCenter();
  }
  private updateCenter(): void {
    this.center = { lat: this.lat, lng: this.lng };
  }

  private updateCenterAndMarker(): void {
    this.center = { lat: this.lat, lng: this.lng };
    this.markerPosition = { lat: this.lat, lng: this.lng };
  }
}
