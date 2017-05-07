"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ContactListComponent = (function () {
    function ContactListComponent() {
        this.contacts = [
            { firstName: "Ammi Reddy", lastName: "Kovvuri", email: "ammi.uel@gmail.com" },
            { firstName: "Vinni", lastName: "Chinta", email: "reddy.uel@gmail.com" },
            { firstName: "Vinni Reddy", lastName: "Kovvuri", email: "ammi.uel@gmail.com" },
            { firstName: "Reddy", lastName: "karri", email: "vinni.uel@gmail.com" }
        ];
        this.selectedContact = {};
    }
    ContactListComponent.prototype.onSelectContact = function (contact) {
        this.selectedContact = contact;
    };
    ContactListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-list',
            template: "<ul><li *ngFor =\"let contact of contacts\"\n    (click) = onSelectContact(contact)\n    [class.clicked]=\"selectedContact === contact\">\n    {{contact.firstName}}\n   </li> </ul>\n   <contact [contact]=\"selectedContact\"> </contact>\n   ",
            styleUrls: ['style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contactList.Component.js.map