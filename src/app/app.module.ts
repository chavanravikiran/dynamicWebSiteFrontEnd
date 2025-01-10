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

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    MenuComponent,
    InquiryComponent,
    BrowserModule,
  ], 
  imports: [CommonModule, BrowserModule, RouterModule, RouterModule.forRoot(routes),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
