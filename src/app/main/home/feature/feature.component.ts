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
      title: 'Giấy dán tường Hoàng Thạch',
      description: 'Chúng tôi có giá cả rẻ nhất thị trường với những sản phẩm tốt nhất mà bạn hoàn toàn có thể tin tưởng.'
    };

    this.items = [
      {
        title: 'Giá cả cạnh tranh',
        description: 'Với tư cách nhà phân phối chuyên nghiệp, chúng tôi nhập khẩu sản phẩm chính hãng từ nhà máy.' +
          'Bởi vậy, chúng tôi có nhiều sản phẩm với mẫu mã đang dạng và giá cả cực kỳ cạnh tranh'
      },
      {
        title: 'Chất lượng tuyệt hảo',
        description: 'Chúng tôi cam kết mang đến cho bạn sản phẩm và dịch vụ tốt nhất' +
          'Bạn sẽ ấn tượng với phong cách phục vụ của chúng tôi. Hãy thử và gọi đến chúng tôi!'
      },
      {
        title: 'Nhân viên thân thiện, nhiệt tình và chuyên nghiêp',
        description: 'Chúng tôi có những nhân viên tận tâm và trách nhiệm. Nụ cười là điều bạn' +
          'sẽ thấy trước tiên khi gặp chúng tôi. Hãy tận hưởng!'
      }
    ];
  }
}

interface Item {
  title: string;
  description: string;
}
