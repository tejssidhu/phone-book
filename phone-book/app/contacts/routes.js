"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
exports.appRoutes = [
    { path: 'contacts', component: index_1.ContactListComponent, resolve: { contacts: index_1.ContactListResolver } },
    { path: 'contact/:id', component: index_1.ContactDetailComponent, resolve: { contact: index_1.ContactResolver } }
];
//# sourceMappingURL=routes.js.map