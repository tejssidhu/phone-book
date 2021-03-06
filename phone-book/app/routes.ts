import {Routes} from '@angular/router';

import { LoginComponent } from './user/index';
import { ContactsAppComponent } from './contacts/index';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contacts', loadChildren: '/phone-book/app/contacts/contact.app.module#ContactsAppModule' }
];
