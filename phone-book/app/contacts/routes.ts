import {Routes} from '@angular/router';

import { ContactListComponent, ContactListResolver, ContactResolver, ContactDetailComponent } from './index';

export const appRoutes: Routes = [
    { path: 'contacts', component: ContactListComponent, resolve: {contacts: ContactListResolver} },
    { path: 'contact/:id', component: ContactDetailComponent, resolve: {contact: ContactResolver} }
];
