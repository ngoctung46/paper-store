import { Component, OnInit } from '@angular/core';

const ITEM: BannerItem = {
  title: 'HT Wall Paper Sticker',
  subTitle: 'We are the best of the best',
  buttons: [
    { content: 'View Categories', url: '/category/all' },
    { content: 'Call Now', url: '0972444570' }
  ]
};

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  item = ITEM;
  constructor() { }
  ngOnInit() {
  }

}

interface BannerItem {
  title: string;
  subTitle: string;
  buttons: ButtonItem[];
}

interface ButtonItem {
  content: string;
  url: string;
}
