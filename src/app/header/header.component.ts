import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item';

const MENU: MenuItem[] = [
  new MenuItem({ name: 'Home', url: '/home' }),
  new MenuItem({ name: 'Category', url: '/category/all' }),
  new MenuItem({ name: 'Contact', url: '/contact' }),
  new MenuItem({ name: 'About', url: '/about' })
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = MENU;
  }

}
