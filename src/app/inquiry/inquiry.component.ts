import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './inquiry.component.html',
  styleUrl: './inquiry.component.scss',
  // animations: [
  //   trigger('fadeIn', [
  //     state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
  //     state('*', style({ opacity: 1, transform: 'translateY(0)' })),
  //     transition(':enter', [animate('0.5s ease-in-out')]),
  //   ]),
  // ],
})
export class InquiryComponent implements  OnInit{

  ngOnInit(): void {
  //   setTimeout(() => {
  //     const rootElement = document.querySelector('.inquiry-form');
  //     if (rootElement) {
  //       rootElement.classList.add('active');
  //     }
  //   }, 100); // Adjust the delay as needed
  }
}
