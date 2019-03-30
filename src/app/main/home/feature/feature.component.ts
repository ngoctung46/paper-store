import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  heading: Item;
  items: Item[];
  constructor() { }

  ngOnInit() {
    this.heading = {
      title: 'Competitive Price',
      description: 'We have the best price in the market, the best durable product quality which you definitely will not reget'
    };

    this.items = [
      {
        title: 'Competitive Price',
        description: 'As a wholesale, we import the product directly from the authentic factories.' +
          'Thus, we have variety of product with reasonable price'
      },
      {
        title: 'Durable Quality',
        description: 'We have the best quality in terms of product and customer services' +
          'You will love us as soon as you see us. Let have a try and call us!'
      },
      {
        title: 'Friendly and Professional Staff',
        description: 'We have a staffs with passion and responsibility. A smile is the thing' +
          'you will see when coming to us. Enjoy!'
      }
    ];
  }
}

interface Item {
  title: string;
  description: string;
}
