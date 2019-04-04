import { Component, OnInit } from '@angular/core';

const ITEM: BannerItem = {
  title: 'Chuyên giấy dán tường Hàn Quốc, tranh 3D. Chất lượng cao và giá cả cạnh tranh.',
  subTitle: 'Giấy dán tường Hoàng Thạch',
  buttons: [
    { content: 'Xem Danh Mục', url: '/category/all' },
    { content: 'Liên Hệ: 0972444570', url: '0972444570' }
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
