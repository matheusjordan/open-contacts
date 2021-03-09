import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;

  readonly avatar = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
  name: string;
  number: string;

  hideAditionalData = false;

  constructor() { }

  ngOnInit() {
    this.name = this.contact.name;
    this.number = this.contact.number;
  }

  showMoreData(): void {
    this.hideAditionalData = !this.hideAditionalData;
  }
}
