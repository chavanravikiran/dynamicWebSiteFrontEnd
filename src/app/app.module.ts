// app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { InquiryComponent } from './inquiry/inquiry.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
// import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutUsComponent } from './about-us/about-us.component';
import { LiveCountComponent } from './live-count/live-count.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    
  ], 
  imports: [CommonModule, BrowserModule, RouterModule, RouterModule.forRoot(routes),
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    GoogleMapsModule,
    GoogleMapComponent,
    AppComponent,
    AvailabilityComponent,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    MenuComponent,
    InquiryComponent,
    AboutUsComponent,
    LiveCountComponent,
    GalleryComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
