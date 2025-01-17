import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AvailabilityComponent } from './availability/availability.component';
import { DesignComponent } from './design/design.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { CommonModule } from '@angular/common';
// import { animate, style, transition, trigger } from '@angular/animations';

// <!--App.component.ts-->
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // MenuComponent, 
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    // ContactUsComponent,
    // AvailabilityComponent,
    // DesignComponent,
    // HomeComponent,
    // ServicesComponent,
    // MenuComponent,
    CommonModule,
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'animatic-static-website';
  showFooter: boolean = true;
}
