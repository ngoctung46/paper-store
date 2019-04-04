import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  slides: any = [
    {
      id: 1,
      title: 'Test Title',
      imageUrl: 't1.jpg',
      description: 'Test Description'
    },
    {
      id: 2,
      title: 'Test Title',
      imageUrl: 't2.jpg',
      description: 'Test Description'
    },
    {
      id: 3,
      title: 'Test Title',
      imageUrl: 't3.jpg',
      description: 'Test Description'
    },
    {
      id: 4,
      title: 'Test Title',
      imageUrl: 't4.jpg',
      description: 'Test Description'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
