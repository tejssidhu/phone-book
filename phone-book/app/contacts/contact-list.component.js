"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./shared/index");
var router_1 = require("@angular/router");
var ContactListComponent = (function () {
    function ContactListComponent(contactService, route) {
        this.contactService = contactService;
        this.route = route;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = this.route.snapshot.data['contacts'];
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'contacts-list',
        templateUrl: 'contact-list.component.html'
    }),
    __metadata("design:paramtypes", [index_1.ContactService, router_1.ActivatedRoute])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map