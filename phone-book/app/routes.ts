import {Routes} from '@angular/router';

import { LoginComponent } from './user/index';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'contacts', loadChildren: '/phone-book/app/contacts/contact.app.module#ContactsAppModule' }
];
