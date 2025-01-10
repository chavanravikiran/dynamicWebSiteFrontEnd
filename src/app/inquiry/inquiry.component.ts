import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class InquiryComponent implements  OnInit{

  ngOnInit(): void {
    setTimeout(() => {
      const rootElement = document.querySelector('.inquiry-form');
      if (rootElement) {
        rootElement.classList.add('active');
      }
    }, 100); // Adjust the delay as needed
  }
}
