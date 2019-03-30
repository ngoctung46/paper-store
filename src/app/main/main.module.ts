import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    CategoryModule,
    HomeModule,
    MainRoutingModule
  ]
})
export class MainModule { }
