import { Component, OnInit } from '@angular/core';

const STAFFS: Staff[] = [
  {
    name: 'Hoàng Thạch',
    position: 'Chủ cửa hàng',
    description: 'Chúng tôi cam kết sẽ mang đến cho các bạn những sản phẩm đẹp và chất lượng',
    imgeUrl: 't1.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  },
  {
    name: 'Phạm Hằng',
    position: 'Nhân viên bán hàng',
    description: 'Giá cả cạnh tranh là ưu thế hàng đầu cho cửa hàng chúng tôi',
    imgeUrl: 't2.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  },
  {
    name: 'Nguyễn Thu',
    position: 'Nhân viên kho',
    description: 'Sản phẩm nhập về luôn được chúng tôi bảo quản cẩn thận và an toàn',
    imgeUrl: 't3.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  },
  {
    name: 'Nguyễn Đại',
    position: 'Nhân viên giao hàng',
    description: 'Chúng tôi sẽ giao đến tận nơi những sản phẩm tốt nhất trong thời gian ngắn nhất',
    imgeUrl: 't4.jpg',
    profileLink: 'https://www.facebook.com/thach.duong.716'
  }
];

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staffs: Staff[];
  constructor() { }

  ngOnInit() {
    this.staffs = STAFFS;
  }

}

interface Staff {
  name: string;
  position: string;
  description: string;
  imgeUrl: string;
  profileLink: string;
}
