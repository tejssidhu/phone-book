import { Component, OnInit  } from '@angular/core';
import { AuthService } from './shared/index';
import { Router  } from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: 'app/user/login.component.html'
})
export class LoginComponent implements OnInit {
    model: any = {};
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.authService.loginUser(this.model.username, this.model.password).subscribe(
            data => {
                this.router.navigate(['contacts'])
            },
            error => {
                this.loginInvalid = true;
            });
    }
}
