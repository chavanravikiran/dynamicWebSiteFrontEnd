// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DesignComponent } from './design/design.component';
import { AvailabilityComponent } from './availability/availability.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LiveCountComponent } from './live-count/live-count.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'design', component: DesignComponent },
  { path: 'availability', component: AvailabilityComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'inquiry', component: InquiryComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'live-count', component: LiveCountComponent},
  { path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
