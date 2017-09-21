import { Component } from '@angular/core';
import { ContactService } from '../contacts/index';

@Component({
    selector: 'nav-bar',
    templateUrl: '/app/nav/navbar.component.html'
})
export class NavBarComponent {

    constructor(private contactService: ContactService){

    }
}
