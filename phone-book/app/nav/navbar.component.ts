import { Component } from '@angular/core';
import { ContactService } from '../contacts/index';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent {

    constructor(private contactService: ContactService){

    }
}
