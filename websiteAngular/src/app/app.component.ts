import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Testimonials } from './models/testimonials';
import { StrapiService } from './services/strapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'websiteAngular';
  constructor(private service: StrapiService){}
  testimonials!: Testimonials

  ngOnInit(): void {
    this.loadTestimonials()
  }

  loadTestimonials(){
    this.service.getTestimonials().subscribe((data: any) => this.testimonials = data.data[0].attributes)
  }
}
