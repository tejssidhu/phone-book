import { Component } from '@angular/core';
import { ContactService } from '../contacts/index';
import { AuthService } from '../user/shared/auth-service';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent {

    constructor(private authService: AuthService) {

    }
}
