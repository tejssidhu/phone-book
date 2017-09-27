"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./user/index");
exports.appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'contacts', loadChildren: '/phone-book/app/contacts/contact.app.module#ContactsAppModule' }
];
//# sourceMappingURL=routes.js.map