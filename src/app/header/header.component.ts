import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) {} 

  isMenuOpen = false;  // Variable to track if menu is open

  toggleMenu() {
    console.log("Menu toggled");
    // this.isMenuOpen = !this.isMenuOpen;
    console.log("isMenuOpen:", this.isMenuOpen);
    this.router.navigate(['/menu']); 
  }
  
}
