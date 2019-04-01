import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: [''],
    message: ['', Validators.minLength(3)]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  send() {
  }

}
