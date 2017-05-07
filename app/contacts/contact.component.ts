import { Component, Input } from '@angular/core';


@Component({
  selector: 'contact',
  template: `
    <input [(ngModel)]= "contact.firstName" type="text" class="form-control border-blue">
  <div>firstName:{{contact.firstName}} <br> lastName:{{contact.lastName}}</div>
  `,
})
export class ContactComponent{
@Input() contact:{};

}
