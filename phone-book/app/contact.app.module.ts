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
  ContactsAppComponent } from './contacts/index';

import { appRoutes } from './contacts/routes';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
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
