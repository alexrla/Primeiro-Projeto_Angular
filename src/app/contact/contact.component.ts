import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formContact = this.fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required,
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    phone: ["", [
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]],
  });

  constructor(
    private fb: FormBuilder
  ) {}

  submitForm() {
    alert("Mensagem enviada!");

    this.formContact.reset();
  }
}
