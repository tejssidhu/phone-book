import { Component, OnInit } from '@angular/core';
import { IContact, ContactService } from './shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'contact-list.component.html'
})

export class ContactListComponent implements OnInit {
    contacts: IContact[];

    constructor(private contactService: ContactService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.contacts = this.route.snapshot.data['contacts'];
    }
}
