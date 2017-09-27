import { Component } from '@angular/core';
import { Router } from  '@angular/router';
import { ContactService } from './shared/index';

@Component({
    moduleId: module.id,
    templateUrl: 'manage-contact.component'
})
export class ManageContactComponent {
    isDirty: boolean = true;

    constructor(private router: Router, private contactService: ContactService) {

    }

}
