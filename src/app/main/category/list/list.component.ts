import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() id: string;
  products = [
    { name: 'Product Name 1', price: 22 },
    { name: 'Product Name 2', price: 22 },
    { name: 'Product Name 3', price: 22 },
    { name: 'Product Name 4', price: 22 },
    { name: 'Product Name 5', price: 22 },
    { name: 'Product Name 6', price: 22 },
    { name: 'Product Name 7', price: 22 },
    { name: 'Product Name 8', price: 22 },
    { name: 'Product Name 9', price: 22 },
    { name: 'Product Name 10', price: 22 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
