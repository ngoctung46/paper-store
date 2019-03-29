import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { FeatureComponent } from './feature/feature.component';
import { StaffComponent } from './staff/staff.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, FeatureComponent, StaffComponent, TestimonialComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
