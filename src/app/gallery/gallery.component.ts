import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  events = [
    { type: 'sports', name: 'Sports' },
    { type: 'birthday', name: 'Birthday' },
    { type: 'corporate', name: 'Corporate' }
  ];

  // All images
  images = [
    { url: 'assets/sports1.jpg', alt: 'Sports Image 1', type: 'sports' },
    { url: 'assets/sports2.jpg', alt: 'Sports Image 2', type: 'sports' },
    { url: 'assets/sports3.jpg', alt: 'Sports Image 3', type: 'sports' },
    { url: 'assets/birthday1.jpg', alt: 'Birthday Image 1', type: 'birthday' },
    { url: 'assets/corporate1.jpg', alt: 'Corporate Image 1', type: 'corporate' }
  ];

  // Filtered images and selected image for slider
  filteredImages: any[] = this.images;
  selectedImage: any = null;

  // Filter images by event type
  filterImages(type: string) {
    this.filteredImages = this.images.filter((image) => image.type === type);
  }

  // Open slider
  openSlider(image: any) {
    this.selectedImage = image;
  }

  // Close slider
  closeSlider() {
    this.selectedImage = null;
  }

  // Previous image in slider
  previousImage() {
    const index = this.filteredImages.indexOf(this.selectedImage);
    this.selectedImage = 
      index === 0 ? this.filteredImages[this.filteredImages.length - 1] : this.filteredImages[index - 1];
  }

  nextImage() {
    const index = this.filteredImages.indexOf(this.selectedImage);
    this.selectedImage = 
      index === this.filteredImages.length - 1 ? this.filteredImages[0] : this.filteredImages[index + 1];
  }
}
