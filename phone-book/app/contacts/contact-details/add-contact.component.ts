import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { IContact, ContactService } from '../shared/index';

@Component({
    moduleId: module.id,
    templateUrl: 'add-contact.component.html'
})

export class AddContactComponent {
    contact: IContact;

    constructor(private route: ActivatedRoute, private contactService: ContactService) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            if (data['contact'])
                this.contact = data['contact'];
            else
                this.contact = <IContact>{ title: '', forename: '', surname: '', email: '' };
        });
    }

    saveContact() {
        //TODO: implement save in contactService
    }
}
