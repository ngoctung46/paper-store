import { CategoryService } from './../services/category.service';
import { MenuService } from './../services/menu.service';
import { Component, OnInit} from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];
  constructor(private menuService: MenuService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.menuService.getMenuItems()
      .subscribe(menuItems => {
      this.menuItems = menuItems.sort(this.compare);
    });
    this.categoryService.getCategories()
      .subscribe(categories => {
        console.log(JSON.stringify(categories));
      });
  }

  compare(a, b) {
    if (a.position < b.position) { return -1; }
    if (a.position > b.position) { return 1; }
    return 0;
  }

}
