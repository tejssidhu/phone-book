"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("./index");
var routes_1 = require("./routes");
var navbar_component_1 = require("../nav/navbar.component");
var ContactsAppModule = (function () {
    function ContactsAppModule() {
    }
    return ContactsAppModule;
}());
ContactsAppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(routes_1.contactRoutes)
        ],
        declarations: [
            index_1.ContactsAppComponent,
            index_1.ContactListComponent,
            index_1.ContactDetailComponent,
            index_1.ContactThumbnailComponent,
            navbar_component_1.NavBarComponent
        ],
        providers: [
            index_1.ContactListResolver,
            index_1.ContactResolver,
            index_1.ContactService
        ]
    })
], ContactsAppModule);
exports.ContactsAppModule = ContactsAppModule;
//# sourceMappingURL=contact.app.module.js.map