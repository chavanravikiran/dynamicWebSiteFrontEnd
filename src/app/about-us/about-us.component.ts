import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LiveCountComponent } from "../live-count/live-count.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, LiveCountComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
