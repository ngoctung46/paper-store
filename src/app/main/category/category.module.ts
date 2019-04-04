import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListComponent } from './list/list.component';
import { CategoryComponent } from './category.component';
import { CategoryService } from 'src/app/services/category.service';

@NgModule({
  declarations: [ListComponent, CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  providers: [CategoryService]
})
export class CategoryModule { }
