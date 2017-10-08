import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent, AuthService } from './user/index';
import { NavBarComponent } from './nav/index';
import { HomeAppComponent } from './home-app.component';

import { appRoutes } from './routes';

import { TOASTR_TOKEN, Toastr } from './shared/index';

declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      HomeAppComponent,
      LoginComponent,
      NavBarComponent
  ],
  providers:    [
    AuthService,
    {
        provide: TOASTR_TOKEN,
        useValue: toastr
    }
  ],
  bootstrap: [ HomeAppComponent ]
})
export class UsersAppModule { }
