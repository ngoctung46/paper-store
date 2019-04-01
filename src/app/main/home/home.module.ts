import { ContactModule } from './../contact/contact.module';
import { ContactComponent } from '../contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { FeatureComponent } from './feature/feature.component';
import { StaffComponent } from './staff/staff.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    FeatureComponent,
    StaffComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    ContactModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
