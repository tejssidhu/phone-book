import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent, AuthService } from './user/index';

import { appRoutes } from './routes';
import { NavBarComponent } from './nav/index';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    LoginComponent,
    NavBarComponent
  ],
  providers:    [
    AuthService
  ],
  bootstrap:    [ LoginComponent ]
})
export class UsersAppModule { }
