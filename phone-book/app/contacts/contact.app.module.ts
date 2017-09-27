import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ContactListComponent,
  ContactDetailComponent,
  ContactThumbnailComponent,
  ContactListResolver,
  ContactResolver,
  ContactService,
  ContactsAppComponent } from './index';

import { contactRoutes } from './routes';
import { NavBarComponent } from '../nav/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [
    ContactsAppComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactThumbnailComponent,
    NavBarComponent
  ],
  providers:    [
    ContactListResolver,
    ContactResolver,
    ContactService
  ]
})
export class ContactsAppModule { }
