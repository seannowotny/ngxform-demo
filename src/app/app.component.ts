import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from './models/contact.model';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contactForm: FormGroup;
  contactModel: Contact;
  contactFields: FormlyFieldConfig[];

  constructor() {
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();
    this.contactFields = this.contactModel.formFields();
  }

  submitForm(contactModel: Contact): void {
    console.log(contactModel);
  }
}
