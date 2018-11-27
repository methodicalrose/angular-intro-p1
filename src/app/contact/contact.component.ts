import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';
import { ContactInterface } from '../interfaces/contact-interface';
import { CONTACTS } from '../mocks/mock-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: ContactInterface[];
  editedContact: ContactInterface = new Contact();
  filter = '';
  shouldReverse = false;

  constructor() { }

  getContacts(filter: String) {
    if (filter === 'all') { this.contacts = CONTACTS; } else {
      const filteredContacts = [];
      const contacts: any = CONTACTS;
      contacts.find((contact) => {
        if (contact.tags.includes(filter)) {
          filteredContacts.push(contact);
        }
      });
      this.contacts = filteredContacts;
    }
  }

  getEditedContact(contact) {
    this.editedContact = contact;
  }

  toggleDeleteContact(contact) {
    contact.isDeleted = !contact.isDeleted;
  }

  deleteContact(contact) {
    const remove: number = this.contacts.indexOf(contact);
    if(remove !== -1) {
      this.contacts.splice(remove, 1);
    }
  }

  get filterBy() { return this.filter; }

  changeFilterBy(filter: string) {
    this.filter = filter;
  }

  get isReversed() { return this.shouldReverse; }

  toggleReverse() { this.shouldReverse = !this.shouldReverse; }

  ngOnInit() {
    this.getContacts('all');
  }

}
