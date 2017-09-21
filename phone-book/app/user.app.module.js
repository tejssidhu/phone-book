"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_1 = require("./user/index");
var routes_1 = require("./routes");
var navbar_component_1 = require("./nav/navbar.component");
var UsersAppModule = (function () {
    function UsersAppModule() {
    }
    return UsersAppModule;
}());
UsersAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            index_1.LoginComponent,
            navbar_component_1.NavBarComponent
        ],
        providers: [
            index_1.AuthService
        ],
        bootstrap: [index_1.LoginComponent]
    })
], UsersAppModule);
exports.UsersAppModule = UsersAppModule;
//# sourceMappingURL=user.app.module.js.map