import { Component, OnInit } from '@angular/core';

const MESSAGES: Testimonial[] = [
  {
    firstName: 'John',
    lastName: 'Deep',
    location: 'Ho Chi Minh City',
    message: `Lorel Ipsum creepeth man for so bearing their firmament won't fowl meat over seas great`,
    imageUrl: 'e1.jpg'
  },
  {
    firstName: 'John',
    lastName: 'Deep',
    location: 'Ho Chi Minh City',
    message: `Lorel Ipsum creepeth man for so bearing their firmament won't fowl meat over seas great`,
    imageUrl: 'e2.jpg'
  }
];
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  items: Testimonial[];
  constructor() { }

  ngOnInit() {
    this.items = MESSAGES;
  }

}

interface Testimonial {
  firstName: string;
  lastName: string;
  location: string;
  message: string;
  imageUrl: string;
}
