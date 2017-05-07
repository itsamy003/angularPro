import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'contact-list',
  template: `<ul><li *ngFor ="let contact of contacts"
    (click) = onSelectContact(contact)
    [class.clicked]="selectedContact === contact">
    {{contact.firstName}}
   </li> </ul>
   <contact [contact]="selectedContact"> </contact>
   `,
  styleUrls: ['style.css']
})
export class ContactListComponent {

  public contacts: any = [
    { firstName: "Ammi Reddy", lastName: "Kovvuri", email: "ammi.uel@gmail.com" },
    { firstName: "Vinni", lastName: "Chinta", email: "reddy.uel@gmail.com" },
    { firstName: "Vinni Reddy", lastName: "Kovvuri", email: "ammi.uel@gmail.com" },
    { firstName: "Reddy", lastName: "karri", email: "vinni.uel@gmail.com" }
  ];

  public selectedContact: any = {};

  onSelectContact(contact: any) {
    this.selectedContact = contact;
  }
}
