import { ContactModule } from './contact/contact.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { AboutComponent } from './about/about.component';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    CategoryModule,
    HomeModule,
    ContactModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
