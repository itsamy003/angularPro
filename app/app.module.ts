import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactListComponent} from './contacts/contactList.Component';
import { ContactComponent} from './contacts/contact.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContactListComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
