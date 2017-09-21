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
var RX_1 = require("rxjs/RX");
var http_1 = require("@angular/http");
var myGlobals = require("../../shared/globals");
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.getContacts = function (userId) {
        return this.http.get(myGlobals.serviceRootUrl + 'Users(' + userId + ')' + '/Phonebook.MyContacts').map(function (response) {
            var contacts = JSON.parse(response.text())['value'];
            return contacts;
        }).catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        return RX_1.Observable.throw(error.statusText);
    };
    ContactService.prototype.getContact = function (id) {
        return this.http.get(myGlobals.serviceRootUrl + 'Contacts(' + id + ')').map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact-service.js.map