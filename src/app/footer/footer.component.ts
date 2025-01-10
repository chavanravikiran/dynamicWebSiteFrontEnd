import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isFooterVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footerTop = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the footer is fully visible on the screen
    if (footerTop < windowHeight) {
      this.isFooterVisible = true;
    } else {
      this.isFooterVisible = false;
    }
  }
}
