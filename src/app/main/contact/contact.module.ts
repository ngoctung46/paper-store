import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
