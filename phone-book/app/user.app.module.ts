import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent, AuthService } from './user/index';
import { NavBarComponent } from './nav/index';
import { HomeAppComponent } from './home-app.component';

import { appRoutes } from './routes';

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
    AuthService
  ],
  bootstrap: [ HomeAppComponent ]
})
export class UsersAppModule { }
