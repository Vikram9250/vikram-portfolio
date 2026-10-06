import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  buildMailtoUrl(): string {
    const subject = `Portfolio enquiry from ${this.formData.name}`;
    const body = [
      `Name: ${this.formData.name}`,
      `Email: ${this.formData.email}`,
      '',
      this.formData.message,
    ].join('\n');

    return `mailto:anupavikram9250@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      window.location.href = this.buildMailtoUrl();
    }
  }
}
