import { Component, OnInit } from '@angular/core';

const MESSAGES: Testimonial[] = [
  {
    firstName: 'Tùng',
    lastName: 'Nguyễn',
    location: 'Tân Bình - TP. Hồ Chí Minh',
    message: `Tôi rất ấn tượng với phong cách phục vụ và độ bền của sản phẩm. Tôi chắc chắn sẽ hợp tác lâu dài với cửa hàng`,
    imageUrl: 'e1.jpg'
  },
  {
    firstName: 'Hương',
    lastName: 'Phạm',
    location: 'Bình Tân - TP. Hồ Chí Minh',
    message: `Thân thiện, uy tín, tận tâm là những gì tôi cảm nhận được từ cửa hàng này`,
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
