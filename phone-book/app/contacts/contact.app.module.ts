import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactListComponent,
  ContactDetailComponent,
  ContactThumbnailComponent,
  ContactListResolver,
  ContactResolver,
  ContactService
} from './index';

import { contactRoutes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactThumbnailComponent
  ],
  providers:    [
    ContactListResolver,
    ContactResolver,
    ContactService
  ]
})
export class ContactsAppModule { }
