import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services = [
    {
      name: 'Service Name 1',
      description: 'I’m a paragraph. Click here to add your own text and edit me.',
      image: 'service1.jpg',
    },
    {
      name: 'Service Name 2',
      description: 'I’m a paragraph. Click here to add your own text and edit me.',
      image: 'service2.jpg',
    },
    {
      name: 'Service Name 3',
      description: 'I’m a paragraph. Click here to add your own text and edit me.',
      image: 'service3.jpg',
    },
  ];
}
