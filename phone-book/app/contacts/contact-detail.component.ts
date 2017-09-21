import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from './shared/index';

@Component({
    templateUrl: '/app/contacts/contact-detail.component.html'
})

export class ContactDetailComponent {
    contact: IContact;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.contact = data['contact'];
        });
    }
}
